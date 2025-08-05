import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          {/* ブランド情報 */}
          <div className='col-span-1 md:col-span-2'>
            <div className='flex items-center mb-4'>
              <span className='text-sm text-gray-300 ml-2'>
                SHIMA NO OTO STUDIO CAMP
              </span>
            </div>
            <p className='text-gray-300 mb-4'>
              小豆島の海の目の前で楽しむ音楽合宿。
              <br />
              テント泊×本格スタジオ×星空ライブで、
              <br />
              最高の音楽体験をお届けします。
            </p>
            <div className='text-sm text-gray-400'>
              〒761-4411 香川県小豆郡小豆島町小部甲2005-1
            </div>
          </div>

          {/* ナビゲーション */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>サイトメニュー</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/'
                  className='text-gray-300 hover:text-cyan-400 transition-colors duration-200'
                >
                  トップ
                </Link>
              </li>
              <li>
                <Link
                  href='/services'
                  className='text-gray-300 hover:text-cyan-400 transition-colors duration-200'
                >
                  サービス
                </Link>
              </li>
              <li>
                <Link
                  href='/facility'
                  className='text-gray-300 hover:text-cyan-400 transition-colors duration-200'
                >
                  施設案内
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className='text-gray-300 hover:text-cyan-400 transition-colors duration-200'
                >
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>

          {/* 連絡先 */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>お問い合わせ</h3>
            <ul className='space-y-2 text-sm text-gray-300'>
              <li>0879-82-xxxx</li>
              <li>info@shimao-camp.com</li>
              <li>9:00〜18:00（年中無休）</li>
            </ul>

            <div className='mt-6'>
              <h4 className='text-md font-medium mb-3'>アクセス</h4>
              <p className='text-sm text-gray-300'>
                高松港より小豆島行きフェリー約1時間
                <br />
                土庄港・草壁港より車で約30分
              </p>
            </div>
          </div>
        </div>

        {/* 下部コピーライト */}
        <div className='border-t border-gray-700 pt-8 mt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <p className='text-sm text-gray-400'>
              © 2024 SHIMA NO OTO STUDIO CAMP. All rights reserved.
            </p>
            <div className='flex space-x-4 mt-4 md:mt-0'>
              <span className='text-xs text-gray-500'>
                小豆島の音楽合宿施設
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
