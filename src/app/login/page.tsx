import { getSafeNextPath } from '@/lib/safeRedirect'
import LoginClient from './LoginClient'

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function LoginPage({ searchParams }: Props) {
  const params = await searchParams
  return <LoginClient next={getSafeNextPath(params.next)} />
}
