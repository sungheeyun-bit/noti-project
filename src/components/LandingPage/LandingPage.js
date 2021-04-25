import React from 'react'
import SearchBox from "./Sections/SearchBox";
import Product from './Sections/Product';
import FeatureOutro from "./Sections/FeatureOutro"
import { Box, Container, HStack,
  Button,
  Flex,
  SimpleGrid,
  Heading,
  Stack,
  Text,
  Link,
  Tooltip,
} from "@chakra-ui/react"
import LandingCard from "./Sections/LandingCard";
import Footer from "./Sections/Footer";
import HowToUse from "./Sections/HowToUse";


export default function LandingPage(props) {    
  return (
    <div style={{ width: '80%', margin: '2rem auto' }}>
    <Flex
      align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column-reverse", md: "row" }}
      wrap="no-wrap"
      minH="100vh"
      px={0}
      mb={16}
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

        <Link href="/user/alarmpage">
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
    <HowToUse>

    </HowToUse>
    {/* <Flex> */}
    <div style={{ display: "flex", justifyContent:"flex-start"}}>
    <Tooltip label="원하는 제품을 검색해 보세요!" aria-label="A tooltip">
    <SearchBox updateSearchTerm={props.updateSearchTerm} />
    </Tooltip>
    </div>
    {/* </Flex> */}
      <br />
      <Text
          fontSize="2xl"
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
    <SimpleGrid columns={[1, 5]} spacing="36px">
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
          mt={16}
          textAlign="center"
          color="primary.800"
          opacity="1"
        >
        </Text>
    </div>
    </HStack>
    <FeatureOutro>

    </FeatureOutro>
    <Footer></Footer>
  </div>
  )
}