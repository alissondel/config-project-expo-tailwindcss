import { Text, TouchableOpacity } from 'react-native'

interface ButtonProps {
  name: string
  onclick: () => void
}

export default function Button({ name, onclick }: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onclick}
      className="bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded"
    >
      <Text className="text-white font-bold">{name}</Text>
    </TouchableOpacity>
  )
}
