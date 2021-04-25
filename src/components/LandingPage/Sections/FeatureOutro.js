import * as React from 'react'
import { Box, Button, Heading, Text, Link } from '@chakra-ui/react'

const FeatureOutro = () => (
    <Box as="section">
      <Box
        maxW="2xl"
        mx="auto"
        px={{ base: '6', lg: '8' }}
        py={{ base: '16', sm: '20' }}
        textAlign="center"
      >
        <Heading as="h2" size="xl" fontWeight="extrabold" letterSpacing="tight">
        ❗️ 핫 아이템 정보 미리 받아 보세요
        </Heading>
        <Text mt="4" fontSize="lg">
          꼭 갖고 싶은 아이템 놓치지 않도록 NOTI로 미리 알림 설정 하시면 발매 하루 전 이메일로 발매 정보를 다시 알려 드립니다
        </Text>
        <Button 
        variant="outline"
        mt="8" as="a" href="/user/alarmpage" size="lg" colorScheme="purple" fontWeight="bold">
          알림설정하기
        </Button>
      </Box>
    </Box>
  )
  export default FeatureOutro;