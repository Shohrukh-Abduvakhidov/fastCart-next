import Link from 'next/link'
import dynamic from 'next/dynamic'
import { useTranslations } from 'next-intl'
import ServicesSection from '@/widgets/servicesSection/servicesSection'

const OurStory = dynamic(() => import('@/widgets/our-story/ourStory'), {
	loading: () => <div className='text-center'>Загрузка...</div>,
})
const StatSection = dynamic(
	() => import('@/widgets/stat-section/stat-section'),
	{
		loading: () => <div className='text-center'>Загрузка...</div>,
	}
)
const TeamSection = dynamic(
	() => import('@/widgets/team-section/team-section'),
	{
		loading: () => <div className='text-center'>Загрузка...</div>,
	}
)

export default function Page() {
	const t = useTranslations('aboutPage')
	return (
		<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
			<nav className='flex mb-8 text-sm'>
				<Link href='/' className='text-gray-500 hover:text-gray-700'>
					{t('breadcrumb.home')}
				</Link>
				<span className='mx-2 text-gray-500'>&gt;</span>
				<span className='text-gray-900'>{t('breadcrumb.about')}</span>
			</nav>
			<OurStory />
			<StatSection />
			<TeamSection />
			<ServicesSection />
		</div>
	)
}
