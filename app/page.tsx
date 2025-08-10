import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/ui/logo'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Zap,
  QrCode,
  BarChart3,
  Shield,
  Smartphone,
  Globe,
  ArrowRight,
  CheckCircle,
} from 'lucide-react'

export default function HomePage() {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Shorten URLs instantly with our optimized infrastructure',
    },
    {
      icon: QrCode,
      title: 'Custom QR Codes',
      description: 'Generate and customize beautiful QR codes for your links',
    },
    {
      icon: BarChart3,
      title: 'Detailed Analytics',
      description: 'Track clicks, locations, and engagement with detailed insights',
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee',
    },
    {
      icon: Smartphone,
      title: 'Mobile Optimized',
      description: 'Perfect experience across all devices and platforms',
    },
    {
      icon: Globe,
      title: 'Global CDN',
      description: 'Fast redirects worldwide with our global infrastructure',
    },
  ]

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50'>
      {/* Header */}
      <header className='bg-white/80 backdrop-blur-sm sticky top-0 z-50 px-4 md:px-14'>
        <div className='container mx-auto px-4 py-4'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <div className='w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center'>
                <Logo />
              </div>
              <span className='text-xl font-bold text-foreground'>Linky</span>
            </div>
            <Button asChild>
              <Link href='/api/auth/login'>
                Get Started
                <ArrowRight className='w-4 h-4 ml-2' />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className='container mx-auto px-4 py-20 md:px-14'>
        <div className='text-center max-w-4xl mx-auto'>
          <h1 className='text-6xl font-bold tracking-tight mb-4'>
            <span className='bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent'>
              The URL Shortener for high-performing links
            </span>
          </h1>
          <p className='text-sm text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed'>
            The most elegant and powerful URL shortener with advanced analytics, custom QR codes,
            and enterprise-grade reliability.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button size='lg' className='text-lg px-8 py-6' asChild>
              <Link href='/api/auth/login'>
                Start Shortening
                <Zap className='w-5 h-5 ml-2' />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className='container mx-auto py-20 px-4 md:px-14'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-gray-900 mb-2'>
            Everything you need to manage URLs
          </h2>
          <p className='text-sm text-gray-600 max-w-3xl mx-auto'>
            Linky It's the most elegant and powerful URL shortener on the market. With advanced
            analytics, customizable QR codes, and enterprise-grade reliability, it's the perfect
            tool for managing your links professionally.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {features.map((feature, index) => (
            <Card
              key={index}
              className='border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300'>
              <CardHeader>
                <div className='w-12 h-12 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center mb-4'>
                  <feature.icon className='w-6 h-6 text-blue-600' />
                </div>
                <CardTitle className='text-xl'>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className='text-base'>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className='bg-gradient-to-r from-blue-600 to-indigo-600 text-white'>
        <div className='container mx-auto px-4 md:px-14 py-20'>
          <div className='text-center max-w-3xl mx-auto'>
            <h2 className='text-2xl md:text-3xl font-bold mb-1'>
              Ready to supercharge your links?
            </h2>
            <p className='text-base mb-8 text-blue-100'>
              Join thousands of creators and businesses using LinkShort to manage their URLs
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Button size='lg' variant='secondary' className='text-lg px-8 py-6' asChild>
                <Link href='/api/auth/login'>
                  Get Started Free
                  <ArrowRight className='w-5 h-5 ml-2' />
                </Link>
              </Button>
            </div>
            <div className='mt-8 flex items-center justify-center gap-6 text-sm text-blue-100'>
              <div className='flex items-center gap-2'>
                <CheckCircle className='w-4 h-4' />
                <span>Free forever plan</span>
              </div>
              <div className='flex items-center gap-2'>
                <CheckCircle className='w-4 h-4' />
                <span>No credit card required</span>
              </div>
              <div className='flex items-center gap-2'>
                <CheckCircle className='w-4 h-4' />
                <span>Setup in 30 seconds</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-white text-gray-800 px-4 md:px-14'>
        <div className='container mx-auto px-4 py-10'>
          <div className='flex items-center justify-center gap-2 mb-3'>
            <div className='w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center'>
              <Logo />
            </div>
            <span className='text-xl font-bold'>Linky</span>
          </div>
          <div className='text-center text-gray-400 text-xs'>
            <p>&copy; 2025 Linky. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
