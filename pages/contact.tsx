import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // ダミーフォーム - 送信動作なし
    alert(
      'ありがとうございます！お問い合わせを受け付けました。（※現在はデモサイトのため実際の送信はされません）'
    )
    console.log('フォームデータ:', formData)
  }

  return (
    <>
      <Head>
        <title>お問い合わせ - SHIMA NO OTO STUDIO CAMP</title>
        <meta
          name='description'
          content='小豆島の音楽合宿施設「SHIMA NO OTO」へのお問い合わせ。軽音サークルの合宿についてお気軽にご相談ください。'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <meta
          name='robots'
          content='noindex, nofollow, noarchive, nosnippet'
        />
      </Head>

      <Header />

      <main className='min-h-screen'>
        {/* Hero Section */}
        <div className='bg-gradient-to-r from-gray-600 to-cyan-600 py-20'>
          <div className='max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8'>
            <h1 className='text-4xl font-bold text-white sm:text-5xl mb-6'>
              お問い合わせ
            </h1>
            <p className='text-xl text-gray-200 mb-4'>
              軽音サークルの合宿、一緒に計画しませんか？
            </p>
            <p className='text-lg text-gray-300'>
              何でもお気軽に相談してください。きっと最高の合宿になります！
            </p>
          </div>
        </div>

        <div className='bg-gray-50 py-16'>
          <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
              {/* 連絡先情報 */}
              <div className='lg:col-span-1'>
                <div className='bg-white shadow-xl rounded-2xl p-6'>
                  <h2 className='text-xl font-bold text-gray-900 mb-6'>
                    お問い合わせ先
                  </h2>

                  <div className='space-y-6'>
                    <div className='bg-cyan-50 p-4 rounded-lg'>
                      <h3 className='font-semibold text-gray-800 mb-2'>
                        電話で相談
                      </h3>
                      <p className='text-cyan-600 font-bold text-lg'>
                        0879-82-xxxx
                      </p>
                      <p className='text-sm text-gray-600 mt-1'>
                        受付時間: 9:00〜18:00（年中無休）
                      </p>
                      <p className='text-xs text-gray-500 mt-2'>
                        ※気軽にお電話ください！
                      </p>
                    </div>

                    <div className='bg-gray-50 p-4 rounded-lg'>
                      <h3 className='font-semibold text-gray-800 mb-2'>
                        メールで相談
                      </h3>
                      <p className='text-gray-600 font-bold'>
                        info@shimao-camp.com
                      </p>
                      <p className='text-xs text-gray-500 mt-2'>
                        ※24時間受付中！返信は翌日までに
                      </p>
                    </div>

                    <div className='bg-gray-100 p-4 rounded-lg'>
                      <h3 className='font-semibold text-gray-800 mb-2'>
                        所在地
                      </h3>
                      <p className='text-gray-700'>
                        〒761-4411
                        <br />
                        香川県小豆郡小豆島町小部甲2005-1
                      </p>
                      <p className='text-sm text-gray-600 mt-2'>
                        土庄港から車で約25分
                        <br />
                        草壁港から車で約35分
                      </p>
                    </div>

                    <div className='bg-cyan-50 p-4 rounded-lg'>
                      <h3 className='font-semibold text-gray-800 mb-2'>
                        送迎サービス
                      </h3>
                      <p className='text-gray-700 text-sm'>
                        小豆島の港からの送迎サービスあり！
                        <br />
                        事前にご相談ください。
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* お問い合わせフォーム */}
              <div className='lg:col-span-2'>
                <div className='bg-white shadow-xl rounded-2xl p-8'>
                  <h2 className='text-2xl font-bold text-gray-900 mb-2'>
                    お問い合わせフォーム
                  </h2>
                  <p className='text-gray-600 mb-8'>
                    下記フォームからお気軽にご相談ください。必ず返信いたします！
                  </p>

                  <form
                    onSubmit={handleSubmit}
                    className='space-y-6'
                  >
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                      <div>
                        <label
                          htmlFor='name'
                          className='block text-sm font-medium text-gray-700 mb-2'
                        >
                          お名前 <span className='text-red-500'>*</span>
                        </label>
                        <input
                          type='text'
                          id='name'
                          name='name'
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500'
                          placeholder='山田太郎'
                        />
                      </div>

                      <div>
                        <label
                          htmlFor='email'
                          className='block text-sm font-medium text-gray-700 mb-2'
                        >
                          メールアドレス <span className='text-red-500'>*</span>
                        </label>
                        <input
                          type='email'
                          id='email'
                          name='email'
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500'
                          placeholder='example@email.com'
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor='phone'
                        className='block text-sm font-medium text-gray-700 mb-2'
                      >
                        電話番号
                      </label>
                      <input
                        type='tel'
                        id='phone'
                        name='phone'
                        value={formData.phone}
                        onChange={handleChange}
                        className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                        placeholder='090-1234-5678'
                      />
                    </div>

                    <div>
                      <label
                        htmlFor='subject'
                        className='block text-sm font-medium text-gray-700 mb-2'
                      >
                        お問い合わせ内容 <span className='text-red-500'>*</span>
                      </label>
                      <select
                        id='subject'
                        name='subject'
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                      >
                        <option value=''>選択してください</option>
                        <option value='camp-plan'>合宿プランについて</option>
                        <option value='studio'>スタジオ・設備について</option>
                        <option value='camp-site'>
                          キャンプサイトについて
                        </option>
                        <option value='price'>料金・予約について</option>
                        <option value='access'>アクセス・送迎について</option>
                        <option value='other'>その他</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor='message'
                        className='block text-sm font-medium text-gray-700 mb-2'
                      >
                        メッセージ <span className='text-red-500'>*</span>
                      </label>
                      <textarea
                        id='message'
                        name='message'
                        rows={6}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                        placeholder='例）軽音サークルの夏合宿を考えています。15人程度で、2泊3日の予定です。料金やスケジュールについて教えてください。'
                      ></textarea>
                    </div>

                    <div>
                      <button
                        type='submit'
                        className='w-full bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-6 py-4 rounded-lg font-bold text-lg hover:from-cyan-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.02]'
                      >
                        送信する
                      </button>
                    </div>

                    <div className='bg-gray-50 p-4 rounded-lg text-center'>
                      <p className='text-sm text-gray-600 mb-2'>
                        <span className='text-red-500'>*</span> は必須項目です
                      </p>
                      <p className='text-xs text-gray-500'>
                        ※ 現在はデモサイトのため、実際の送信はされません。
                        <br />
                        本格稼働時にはきちんと返信いたします！
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
