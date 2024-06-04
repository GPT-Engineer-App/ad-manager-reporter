import { Box, Heading, Text, VStack, Select, Button, HStack } from "@chakra-ui/react";
import { useState } from "react";

const ReportSection = () => {
  const [reportType, setReportType] = useState("");
  const [dateRange, setDateRange] = useState("");

  const handleGenerateReport = () => {
    // Logic to generate report based on selected options
    console.log("Generating report for:", reportType, dateRange);
  };

  return (
    <Box p={4}>
      <Heading as="h2" size="lg" mb={4}>
        Reports
      </Heading>
      <VStack spacing={4} align="stretch">
        <HStack spacing={4}>
          <Select placeholder="Select report type" value={reportType} onChange={(e) => setReportType(e.target.value)}>
            <option value="performance">Performance</option>
            <option value="inventory">Inventory</option>
            <option value="sales">Sales</option>
          </Select>
          <Select placeholder="Select date range" value={dateRange} onChange={(e) => setDateRange(e.target.value)}>
            <option value="last_7_days">Last 7 days</option>
            <option value="last_30_days">Last 30 days</option>
            <option value="custom">Custom</option>
          </Select>
          <Button onClick={handleGenerateReport}>Generate Report</Button>
        </HStack>
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