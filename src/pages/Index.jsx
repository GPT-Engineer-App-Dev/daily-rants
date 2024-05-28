import { Box, Container, Flex, Heading, Text, VStack, Link, HStack } from "@chakra-ui/react";
import { FaHome, FaUser, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">My Blog</Heading>
        <HStack spacing={4}>
          <Link href="#" color="white" _hover={{ color: "gray.400" }}><FaHome /> Home</Link>
          <Link href="#" color="white" _hover={{ color: "gray.400" }}><FaUser /> About</Link>
          <Link href="#" color="white" _hover={{ color: "gray.400" }}><FaEnvelope /> Contact</Link>
        </HStack>
      </Flex>
      <Flex mt={4} direction={{ base: "column", md: "row" }}>
        <Box flex="3" p={4}>
          <VStack spacing={4} align="stretch">
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Blog Post Title 1</Heading>
              <Text mt={4}>This is a summary of the blog post content. It should be engaging and give an idea of what the post is about.</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Blog Post Title 2</Heading>
              <Text mt={4}>This is a summary of the blog post content. It should be engaging and give an idea of what the post is about.</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Blog Post Title 3</Heading>
              <Text mt={4}>This is a summary of the blog post content. It should be engaging and give an idea of what the post is about.</Text>
            </Box>
          </VStack>
        </Box>
        <Box flex="1" p={4} bg="gray.50" ml={{ md: 4 }} mt={{ base: 4, md: 0 }}>
          <Heading as="h3" size="md" mb={4}>Sidebar</Heading>
          <VStack spacing={4} align="stretch">
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading fontSize="lg">About Me</Heading>
              <Text mt={2}>A brief description about the blog author. This section can include a photo, bio, and links to social media.</Text>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading fontSize="lg">Categories</Heading>
              <Text mt={2}>List of blog categories or tags to help readers navigate the content.</Text>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px">
              <Heading fontSize="lg">Recent Posts</Heading>
              <Text mt={2}>Links to recent blog posts to keep readers engaged with fresh content.</Text>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;