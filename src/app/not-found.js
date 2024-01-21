import Link from 'next/link'
import { headers } from 'next/headers'

export default async function NotFound() {
  const headersList = headers()
  const domain = headersList.get('host')
  console.log("🚀 ~ NotFound ~ domain:", domain)


  // const data = await getSiteData(domain)
  return (
    <div>
      <div class="text-center">
        <h1 class="mb-4 text-6xl font-semibold text-red-500">404</h1>
        <p class="mb-4 text-3xl text-gray-600">Өөөөө! Хуудас олдсонгүй шдээ</p>
        <p class="mt-4 text-gray-600">Нүүр хуудасруу <Link href="/">БУЦАХ</Link>
          .</p>
      </div>
    </div>
  )
}