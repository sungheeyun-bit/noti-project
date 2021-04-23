import React from 'react'
import SearchBox from "./Sections/SearchBox";
import Product from './Sections/Product';
import { Box, Container, HStack,
  Button,
  Flex,
  SimpleGrid,
  Heading,
  Stack,
  Text,
  Link, 
} from "@chakra-ui/react"
import LandingCard from "./Sections/LandingCard";


export default function LandingPage(props) {    
  return (
    <div style={{ width: '80%', margin: '2rem auto' }}>
    <Flex
      align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column-reverse", md: "row" }}
      wrap="no-wrap"
      minH="100vh"
      px={6}
      mb={10}
      // {...rest}
    >
      <Stack
          spacing={4}
          w={{ base: "80%", md: "40%" }}
          align={["center", "center", "flex-start", "flex-start"]}
      >
        <Heading
          as="h1"
          size="2xl"
          fontWeight="extrabold"
          color="primary.800"
          lineHeight={1.4}
          textAlign={["center", "center", "left", "left"]}
        >
          NOTI로 발매 정보를 미리 받아 보세요. 🔔
        </Heading>

        <Heading
          as="h2"
          size="md"
          color="primary.800"
          opacity="0.8"
          fontWeight="normal"
          lineHeight={1.5}
          textAlign={["center", "center", "left", "left"]}
        >
          꼭 갖고 싶은 아이템 놓치지 않도록 NOTI로 미리 알림 설정 하시면 발매 하루 전 이메일로 발매 정보를 다시 알려 드립니다.
        </Heading>

        <Link href="/login">
          <Button
            colorScheme="purple"
            borderRadius="8px"
            py="4"
            px="4"
            lineHeight="1"
            size="lg"
          >
            발매 정보 미리 받기
          </Button>
        </Link>

        <Text
          fontSize="xs"
          mt={2}
          textAlign="center"
          color="primary.800"
          opacity="0.6"
        >
        </Text>
      </Stack>

      <Box w={{ base: "100%", sm: "60%", md: "40%" }} mb={{ base: 12, md: 0 }}>
        <LandingCard>
        {/* <Image src size="100%" rounded="1rem" shadow="2xl" /> */}
        
        </LandingCard>
      </Box>
    </Flex>

    <SearchBox updateSearchTerm={props.updateSearchTerm} />
      <br />
      <Text
          fontSize="3xl"
          fontWeight="bold"
          mt={2}
          textAlign="left"
          color="primary.800"
          opacity="0.8"
        >
          🎉 최신 발매정보
        </Text>
      
    <HStack>
    <div style={{ width: '100%', margin: '2rem auto' }}>
    <SimpleGrid columns={[2, null, 5]} spacing="36px">
        {props.productList.map((data, index) => 
    <Product 
        data={data} 
        key={index} 
        handleClick={() => {props.addToCart(data._id)}}
        />)}
    </SimpleGrid>
        <Text
          fontSize="lg"
          fontWeight="bold"
          mt={2}
          textAlign="center"
          color="primary.800"
          opacity="1"
        >
          🎉 최신 발매정보를 지속적으로 업데이트 하고 있어요!
        </Text>
    </div>
    </HStack>        
  </div>
  )
}