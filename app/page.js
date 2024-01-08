import SearchItems from '@/components/search-items'
import Navbar from '@/components/ui/navbar'


export default function Home() {
  return (
<div className='flex flex-col h-full'>
  <Navbar/>
  <SearchItems/>
</div>
  )
}
