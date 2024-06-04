import { Box, Container } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import ReportSection from "../components/ReportSection";

const Index = () => {
  return (
    <Box>
      <NavBar />
      <Container maxW="container.xl" mt={4}>
        <ReportSection />
      </Container>
    </Box>
  );
};

export default Index;