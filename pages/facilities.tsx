import Head from 'next/head'
import Header from '@/components/Header'

export default function Facilities() {
  return (
    <>
      <Head>
        <title>施設紹介 - Music Camp</title>
        <meta name="description" content="Music Campの施設紹介" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <Header />
      
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              施設紹介
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Music Campの充実した施設をご紹介します
            </p>
          </div>
          
          <div className="mt-12 space-y-12">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">レッスンルーム</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">個人レッスンルーム（6室）</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>防音設備完備</li>
                      <li>グランドピアノ設置</li>
                      <li>録音機材完備</li>
                      <li>エアコン・空気清浄機設置</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">グループレッスンルーム（3室）</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>最大15名収容可能</li>
                      <li>各種楽器完備</li>
                      <li>プロジェクター設置</li>
                      <li>音響設備完備</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">レコーディングスタジオ</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">メインスタジオ</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>32chミキシングコンソール</li>
                      <li>Pro Tools HDX システム</li>
                      <li>モニタースピーカー（GENELEC）</li>
                      <li>各種マイクロフォン</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">サブスタジオ</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>16chミキシングコンソール</li>
                      <li>Logic Pro X システム</li>
                      <li>ボーカルブース完備</li>
                      <li>エフェクター各種</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">共用スペース</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">ロビー</h3>
                    <p className="text-gray-600">
                      レッスン前後の待ち時間をゆっくりとお過ごしいただけます
                    </p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">ライブラリー</h3>
                    <p className="text-gray-600">
                      楽譜や音楽書籍を自由にご覧いただけます
                    </p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">練習室</h3>
                    <p className="text-gray-600">
                      個人練習用の小部屋を時間貸しでご利用いただけます
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}