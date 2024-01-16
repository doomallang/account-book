import { useRouter } from 'next/navigation'

export default function useLink() {
  const router = useRouter()

  const onLink = (link: string) => {
    router.push(link + window.location.search)
  }

  return {
    onLink,
  }
}
