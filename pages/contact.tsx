import Head from 'next/head'
import Header from '@/components/Header'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // ダミーフォーム - 送信動作なし
    alert('フォームが送信されました（実際の送信機能は実装されていません）')
    console.log('フォームデータ:', formData)
  }

  return (
    <>
      <Head>
        <title>お問い合わせ - Music Camp</title>
        <meta name="description" content="Music Campへのお問い合わせ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <Header />
      
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              お問い合わせ
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              ご質問やご相談がございましたら、お気軽にお問い合わせください
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 連絡先情報 */}
            <div className="lg:col-span-1">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">お問い合わせ先</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-800">電話番号</h3>
                    <p className="text-gray-600">03-1234-5678</p>
                    <p className="text-sm text-gray-500">営業時間: 9:00〜21:00</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-800">メールアドレス</h3>
                    <p className="text-gray-600">info@music-camp.com</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-800">住所</h3>
                    <p className="text-gray-600">
                      〒150-0001<br />
                      東京都渋谷区神宮前1-2-3<br />
                      ミュージックビル4F
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-800">アクセス</h3>
                    <p className="text-gray-600">
                      JR山手線「原宿駅」徒歩5分<br />
                      地下鉄「明治神宮前駅」徒歩3分
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* お問い合わせフォーム */}
            <div className="lg:col-span-2">
              <div className="bg-white shadow-lg rounded-lg p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">お問い合わせフォーム</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        お名前 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="山田太郎"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        メールアドレス <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="example@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      電話番号
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="090-1234-5678"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      お問い合わせ内容 <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">選択してください</option>
                      <option value="lesson">レッスンについて</option>
                      <option value="facility">施設について</option>
                      <option value="price">料金について</option>
                      <option value="recording">レコーディングについて</option>
                      <option value="event">イベントについて</option>
                      <option value="other">その他</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      メッセージ <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="お問い合わせ内容を詳しくお書きください"
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
                    >
                      送信する
                    </button>
                  </div>
                  
                  <p className="text-sm text-gray-500">
                    <span className="text-red-500">*</span> は必須項目です
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}