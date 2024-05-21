import {Card, Image, Text,  Button, Group , CloseButton} from '@mantine/core';

function CardComponent({tittle,par,i,click}) {
  return (
    <Card  shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{tittle}</Text>
        <CloseButton   onClick={click}/>
      </Group>
      <Text size="sm" c="dimmed">{par}</Text>
      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Book classic tour now
      </Button>
    </Card>)         
  }
export default CardComponent;
// Badge :kart ustundeki saled yazısı

