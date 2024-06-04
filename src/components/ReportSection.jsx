import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const ReportSection = () => {
  return (
    <Box p={4}>
      <Heading as="h2" size="lg" mb={4}>
        Reports
      </Heading>
      <VStack spacing={4} align="stretch">
        {/* Placeholder for reports */}
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Report 1</Heading>
          <Text mt={4}>Details about Report 1...</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Report 2</Heading>
          <Text mt={4}>Details about Report 2...</Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default ReportSection;