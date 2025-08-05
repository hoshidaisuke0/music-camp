import Head from 'next/head'
import Header from '@/components/Header'

export default function Services() {
  return (
    <>
      <Head>
        <title>サービス - Music Camp</title>
        <meta name="description" content="Music Campのサービス紹介" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <Header />
      
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              サービス
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Music Campが提供する様々なサービスをご紹介します
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">個人レッスン</h2>
                <p className="text-gray-600 mb-6">
                  マンツーマンでの個別指導により、あなたのペースに合わせた丁寧なレッスンを提供します。
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>ピアノ</li>
                  <li>ギター</li>
                  <li>ボーカル</li>
                  <li>ドラム</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">グループレッスン</h2>
                <p className="text-gray-600 mb-6">
                  仲間と一緒に楽しく学べるグループレッスンで、音楽の楽しさを共有しましょう。
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>バンド演奏</li>
                  <li>アンサンブル</li>
                  <li>合唱</li>
                  <li>音楽理論</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">レコーディング</h2>
                <p className="text-gray-600 mb-6">
                  プロ仕様の録音機材を使用して、あなたの演奏を高品質で録音いたします。
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>楽曲録音</li>
                  <li>デモ制作</li>
                  <li>ミックス・マスタリング</li>
                  <li>CD制作</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">イベント企画</h2>
                <p className="text-gray-600 mb-6">
                  発表会やコンサートなど、様々な音楽イベントの企画・運営をサポートします。
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>発表会</li>
                  <li>ライブイベント</li>
                  <li>コンクール</li>
                  <li>ワークショップ</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}