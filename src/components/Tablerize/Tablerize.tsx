import React from 'react';
import {
  Flex,
  Text,
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableProps,
} from '@chakra-ui/react';

type TablerizeProps = TableProps & {
  title: string;
  headers: string[];
  rows: string[][];
};

const Tablerize: React.FC<TablerizeProps> = ({ title, headers, rows, ...rest }) => {
  return (
    <Flex direction={'column'} gap={3}>
      <Text color={'gray.400'} fontWeight={'bold'}>
        {title}
      </Text>
      <TableContainer>
        <Table variant="simple" {...rest}>
          <Thead>
            <Tr>
              {headers.map((header, index) => (
                <Th key={index}>{header}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {rows.map((row, rowIndex) => (
              <Tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <Td key={cellIndex}>{cell}</Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
};

export default Tablerize;
