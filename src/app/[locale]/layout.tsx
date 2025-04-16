// app/[locale]/layout.tsx
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import { getMessages } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import Navbar from '@/widgets/navbar/navbar'
import Footer from '@/widgets/footer/footer'
import { ReduxProvider } from '../assets/ReduxProvider'

export default async function LocaleLayout({
	children,
	params,
}: {
	children: React.ReactNode
	params: { locale: string }
}) {
	const { locale } = params

	if (!hasLocale(routing.locales, locale)) {
		notFound()
	}

	const messages = await getMessages({ locale })

	return (
		<NextIntlClientProvider locale={locale} messages={messages}>
      <ReduxProvider>
			<Navbar />
			{children}
			<Footer />
      </ReduxProvider>
		</NextIntlClientProvider>
	)
}
