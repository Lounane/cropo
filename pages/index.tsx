// import Test from '@/components/organisms/Test'
import { Cropper, Header } from '@organisms'
import tw from 'twin.macro'

// const Container = tw.div`min-h-screen text-gray-200 bg-gradient-to-tl from-gray-900 to-gray-800`
const Container = tw.div`min-h-screen w-screen  text-gray-200 bg-gray-900  `
const App = () => (
  <Container>
    <Header />
    <Cropper />
    {/* <Test /> */}
  </Container>
)

export default App
