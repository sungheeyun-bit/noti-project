import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex, Heading } from '@chakra-ui/react';
import { FcLike, FcAlarmClock, FcAdvertising } from 'react-icons/fc';


const Feature = ({ title, text, icon }) => {
  return (
    <Stack
    mt="0"
    mb="16"
    align={'center'}
    >
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
    <Box p={4} mb="16" align="center">
        <Heading
        size="xl"
        fontWeight="extrabold"
        mb="16"
        > 👉 간편하게 NOTI를 이용하는 방법</Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={FcLike} w={10} h={10} />}
          title={'원하는 상품 저장'}
          text={
            '최신 발매정보에서 원하시는 상품을 검색하고 저장 버튼을 눌러 주세요.'
          }
        />
        <Feature
          icon={<Icon as={FcAlarmClock} w={10} h={10} />}
          title={'알림 설정'}
          text={
            '저장한 상품은 알림 리스트에서 알림 설정 또는 삭제 할 수 있습니다.'
          }
        />
        <Feature
          icon={<Icon as={FcAdvertising} w={10} h={10} />}
          title={'발매정보 미리 받기'}
          text={
            '알림 설정한 제품은 발매 하루 전 이메일로 발매 정보를 다시 알려 드립니다.'
          }
        />
      </SimpleGrid>
    </Box>
  );
}