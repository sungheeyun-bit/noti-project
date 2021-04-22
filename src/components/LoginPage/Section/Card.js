import { Box, useColorModeValue } from '@chakra-ui/react';
import * as React from 'react';
export const Card = (props) => (React.createElement
    (Box, Object.assign({ bg: useColorModeValue
        ('white', 'gray.700'), py: "12", px: { base: '4', md: '16' }, shadow: "base", rounded: { sm: 'lg' } }, props)));
