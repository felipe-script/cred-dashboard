import React, { FC, ReactNode } from 'react';
import { Box, BoxProps, useStyleConfig } from "@chakra-ui/react";

interface CardHeaderProps extends BoxProps {
  variant: string;
  children?: ReactNode;
}

const CardHeader: FC<CardHeaderProps> = ({ variant, children, ...rest }) => {
  const styles = useStyleConfig("CardHeader", { variant });

  return (
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  );
};

export default CardHeader;