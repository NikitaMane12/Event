import { useState, useEffect } from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, StarIcon } from "@chakra-ui/icons";

function AppNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [login, setLogin] = useState(false);
  const [role, setRole] = useState(null);
  const toast = useToast();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLogin(true);
    } else {
      setLogin(false);
    }
    const userDetails = JSON.parse(localStorage.getItem("userDetails"));
    if (userDetails && userDetails.role) {
      setRole(userDetails.role);
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setLogin(false);
    toast({
      title: "Logged Out",
      description: "You have been logged out successfully.",
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Box bg="red" px={4} position="sticky" top={0} zIndex={10} pt={1} pb={1}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box ml={5}>
          <Link href="/">
            <h1>Event</h1>
          </Link>
        </Box>
        <HStack
          as="nav"
          spacing={4}
          display={{ base: "none", md: "flex" }}
          ml={5}
        >
          <Link href="/" fontWeight={500}>
            Home
          </Link>
          <Link href="/FindEvent" fontWeight={500}>
            Find Events
          </Link>
          <Link href="/bookedEvents" fontWeight={500}>
            Booked Events
          </Link>
          {login ? (
            <Link onClick={handleLogout} fontWeight={500}>
              Logout
            </Link>
          ) : (
            <>
              <Link href="/auth" fontWeight={500}>
                Login
              </Link>
              <Link href="/auth" fontWeight={500}>
                Sign Up
              </Link>
            </>
          )}
          {role === "eventPlanner" && <StarIcon />}
        </HStack>
        <Flex alignItems="center">
          <IconButton
            size="lg"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }} fontWeight={800} mt={2}>
          <Stack as="nav" spacing={4}>
            <Link href="/" fontWeight={500}>
              Home
            </Link>
            <Link href="/FindEvent" fontWeight={500}>
              Find Events
            </Link>
            {login ? (
              <Link onClick={handleLogout} fontWeight={500}>
                Logout
              </Link>
            ) : (
              <>
                <Link href="/auth" fontWeight={500}>
                  Login
                </Link>
                <Link href="/auth" fontWeight={500}>
                  Sign Up
                </Link>
              </>
            )}
            {role === "eventPlanner" && <StarIcon />}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}

export default AppNavbar;
