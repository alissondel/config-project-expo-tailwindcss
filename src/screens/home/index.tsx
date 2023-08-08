import { useState } from 'react'
import { Text, View } from 'react-native'
import Button from '../../components/Button'

export function Home() {
  const [count, setCount] = useState<number>(0)

  return (
    <View className="flex-1 justify-center items-center">
      <Text className="font-semibold text-base py-2">Contador: {count}</Text>
      <Button
        name="Aumentar"
        onclick={() => setCount((prevState) => prevState + 1)}
      />
    </View>
  )
}
