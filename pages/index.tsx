import Head from 'next/head'
import Header from '@/components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Music Camp - トップページ</title>
        <meta name="description" content="Music Campへようこそ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      
      <main className="min-h-screen">
        {/* Hero Section with Background Image */}
        <div 
          className="relative h-screen bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/main-visual/IMG_8558.JPG')"
          }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          
          {/* Hero Content */}
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center text-white px-4 sm:px-6 lg:px-8">
              <h1 className="text-5xl font-bold sm:text-6xl md:text-7xl lg:text-8xl">
                Music Camp
              </h1>
              <p className="mt-6 max-w-3xl mx-auto text-xl sm:text-2xl md:text-3xl font-light">
                音楽を通じて素晴らしい体験をお届けします
              </p>
              <div className="mt-8">
                <a
                  href="/contact"
                  className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors duration-200"
                >
                  お問い合わせ
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Music Campの特徴
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900">プロの指導</h3>
                  <p className="mt-2 text-base text-gray-500">
                    経験豊富なプロの講師陣による質の高いレッスンを提供
                  </p>
                </div>
              </div>
              
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900">充実した設備</h3>
                  <p className="mt-2 text-base text-gray-500">
                    最新の楽器と録音設備を完備した環境でのレッスン
                  </p>
                </div>
              </div>
              
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900">個別対応</h3>
                  <p className="mt-2 text-base text-gray-500">
                    一人ひとりのレベルに合わせたカスタマイズレッスン
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}