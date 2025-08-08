'use client'
import { useState, useEffect } from 'react'
import { SITE_URL } from '@/config/constants'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import { QrCode, Download, Palette, Settings } from 'lucide-react'
import { updateQRConfig } from '@/actions/url-actions'
import QRCode from 'qrcode'
import Image from 'next/image'
import { toast } from 'sonner'

interface QRGeneratorProps {
  url: {
    id: string
    shortCode: string
    qrConfig?: any
  }
}

export function QRGenerator({ url }: QRGeneratorProps) {
  const [qrConfig, setQrConfig] = useState({
    size: 256,
    fgColor: '#000000',
    bgColor: '#FFFFFF',
    margin: 4,
    ...url.qrConfig,
  })
  const [qrDataUrl, setQrDataUrl] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const shortUrl = `${window.location.origin}/${url.shortCode}`

  const generateQR = async () => {
    setIsGenerating(true)
    try {
      const dataUrl = await QRCode.toDataURL(shortUrl, {
        width: qrConfig.size,
        color: {
          dark: qrConfig.fgColor,
          light: qrConfig.bgColor,
        },
        margin: qrConfig.margin,
      })
      setQrDataUrl(dataUrl)
    } catch (error) {
      console.error('Error generating QR code:', error)
    } finally {
      setIsGenerating(false)
    }
  }

  useEffect(() => {
    generateQR()
  }, [qrConfig, shortUrl])

  const handleConfigChange = (key: string, value: any) => {
    setQrConfig((prev: any) => ({ ...prev, [key]: value }))
  }

  const saveConfig = async () => {
    try {
      await updateQRConfig(url.id, qrConfig).then(() => {
        toast.success('QR config saved successfully')
      })
    } catch (error) {
      console.error('Failed to save QR config:', error)
    }
  }

  const downloadQR = () => {
    if (!qrDataUrl) return

    const link = document.createElement('a')
    link.download = `qr-${url.shortCode}.png`
    link.href = qrDataUrl
    link.click()
  }

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
      {/* QR Code Preview */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <QrCode className='w-5 h-5' />
            QR Code Preview
          </CardTitle>
          <CardDescription>Scan to access: {shortUrl}</CardDescription>
        </CardHeader>
        <CardContent className='flex flex-col items-center space-y-4'>
          <div className='p-6 bg-gray-50 dark:bg-gray-800 rounded-lg'>
            {isGenerating ? (
              <div className='w-64 h-64 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded'>
                <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600'></div>
              </div>
            ) : (
              qrDataUrl && (
                <Image
                  src={qrDataUrl}
                  alt='QR Code'
                  className='max-w-full h-auto rounded'
                  style={{ width: qrConfig.size, height: qrConfig.size }}
                  width={qrConfig.size}
                  height={qrConfig.size}
                />
              )
            )}
          </div>

          <Button onClick={downloadQR} disabled={!qrDataUrl || isGenerating}>
            <Download className='w-4 h-4 mr-2' />
            Download QR Code
          </Button>
        </CardContent>
      </Card>

      {/* Customization Options */}
      <Card>
        <CardHeader>
          <CardTitle className='flex items-center gap-2'>
            <Settings className='w-5 h-5' />
            Customization
          </CardTitle>
          <CardDescription>Customize your QR code appearance</CardDescription>
        </CardHeader>
        <CardContent className='space-y-6'>
          {/* Size */}
          <div className='space-y-2'>
            <Label>Size: {qrConfig.size}px</Label>
            <Slider
              value={[qrConfig.size]}
              onValueChange={(value) => handleConfigChange('size', value[0])}
              min={128}
              max={512}
              step={32}
              className='w-full'
            />
          </div>

          {/* Margin */}
          <div className='space-y-2'>
            <Label>Margin: {qrConfig.margin}</Label>
            <Slider
              value={[qrConfig.margin]}
              onValueChange={(value) => handleConfigChange('margin', value[0])}
              min={0}
              max={8}
              step={1}
              className='w-full'
            />
          </div>

          {/* Colors */}
          <div className='grid grid-cols-2 gap-4'>
            <div className='space-y-2'>
              <Label htmlFor='fgColor'>Foreground Color</Label>
              <div className='flex items-center gap-2'>
                <Input
                  id='fgColor'
                  type='color'
                  value={qrConfig.fgColor}
                  onChange={(e) => handleConfigChange('fgColor', e.target.value)}
                  className='w-12 h-10 p-1 rounded cursor-pointer'
                />
                <Input
                  type='text'
                  value={qrConfig.fgColor}
                  onChange={(e) => handleConfigChange('fgColor', e.target.value)}
                  className='flex-1'
                />
              </div>
            </div>

            <div className='space-y-2'>
              <Label htmlFor='bgColor'>Background Color</Label>
              <div className='flex items-center gap-2'>
                <Input
                  id='bgColor'
                  type='color'
                  value={qrConfig.bgColor}
                  onChange={(e) => handleConfigChange('bgColor', e.target.value)}
                  className='w-12 h-10 p-1 rounded cursor-pointer'
                />
                <Input
                  type='text'
                  value={qrConfig.bgColor}
                  onChange={(e) => handleConfigChange('bgColor', e.target.value)}
                  className='flex-1'
                />
              </div>
            </div>
          </div>

          <Button onClick={saveConfig} className='w-full'>
            <Palette className='w-4 h-4 mr-2' />
            Save Configuration
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
