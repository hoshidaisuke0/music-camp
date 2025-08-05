import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Facilities() {
  return (
    <>
      <Head>
        <title>施設案内 - SHIMA NO OTO STUDIO CAMP</title>
        <meta
          name='description'
          content='小豆島の音楽合宿施設「SHIMA NO OTO」の詳しい施設情報とアクセス方法をご紹介。'
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
              施設案内
            </h1>
            <p className='text-xl text-gray-200'>
              小豆島の海の目の前にある本格音楽合宿施設の詳細をご紹介
            </p>
          </div>
        </div>

        <div className='bg-gray-50 py-16'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            {/* スタジオ設備 */}
            <div className='mb-20'>
              <h2 className='text-3xl font-bold text-center text-gray-900 mb-12'>
                スタジオ設備
              </h2>

              <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
                <div className='bg-white rounded-2xl shadow-xl p-8'>
                  <div className='text-center mb-6'>
                    <div className='text-5xl mb-4'></div>
                    <h3 className='text-2xl font-bold text-gray-900'>
                      メインスタジオ（A~C）
                    </h3>
                    <p className='text-gray-600'>
                      バンド合宿に最適な幅広スタジオ
                    </p>
                  </div>

                  <ul className='space-y-3 text-gray-700'>
                    <li className='flex items-center'>
                      <span className='text-green-500 mr-3 text-xl'>•</span>
                      ドラムセット（Pearl・TAMA）
                    </li>
                    <li className='flex items-center'>
                      <span className='text-green-500 mr-3 text-xl'>•</span>
                      ギターアンプ（Marshall・Fender）
                    </li>
                    <li className='flex items-center'>
                      <span className='text-green-500 mr-3 text-xl'>•</span>
                      ベースアンプ（Ampeg・Eden）
                    </li>
                    <li className='flex items-center'>
                      <span className='text-green-500 mr-3 text-xl'>•</span>
                      キーボード（YAMAHA P-125）
                    </li>
                    <li className='flex items-center'>
                      <span className='text-green-500 mr-3 text-xl'>•</span>
                      PAシステム・モニター完備
                    </li>
                  </ul>
                </div>

                <div className='bg-white rounded-2xl shadow-xl p-8'>
                  <div className='text-center mb-6'>
                    <div className='text-5xl mb-4'></div>
                    <h3 className='text-2xl font-bold text-gray-900'>
                      コンパクトスタジオ（D~F）
                    </h3>
                    <p className='text-gray-600'>
                      個人練習やアコースティックに最適
                    </p>
                  </div>

                  <ul className='space-y-3 text-gray-700'>
                    <li className='flex items-center'>
                      <span className='text-green-500 mr-3 text-xl'>•</span>
                      アコースティックピアノ
                    </li>
                    <li className='flex items-center'>
                      <span className='text-green-500 mr-3 text-xl'>•</span>
                      アコースティックギター
                    </li>
                    <li className='flex items-center'>
                      <span className='text-green-500 mr-3 text-xl'>•</span>
                      コンデンサーマイク
                    </li>
                    <li className='flex items-center'>
                      <span className='text-green-500 mr-3 text-xl'>•</span>
                      レコーディング機材
                    </li>
                    <li className='flex items-center'>
                      <span className='text-green-500 mr-3 text-xl'>•</span>
                      モニタースピーカー
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* キャンプサイト */}
            <div className='mb-20'>
              <h2 className='text-3xl font-bold text-center text-gray-900 mb-12'>
                キャンプサイト
              </h2>

              <div className='bg-white rounded-2xl shadow-xl overflow-hidden'>
                <div className='p-8'>
                  <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                    <div>
                      <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                        海の目の前のロケーション
                      </h3>
                      <p className='text-gray-600 mb-6 text-lg'>
                        瀬戸内海を一望できる絶景ポイント。朝の日の出から夕日まで、一日中美しい景色を楽しめます。
                      </p>

                      <div className='space-y-4'>
                        <div className='flex items-center'>
                          <span className='text-2xl mr-3'></span>
                          <span className='text-gray-700'>
                            最大20人までのグループキャンプ
                          </span>
                        </div>
                        <div className='flex items-center'>
                          <span className='text-2xl mr-3'></span>
                          <span className='text-gray-700'>
                            キャンプファイヤー・BBQスペース
                          </span>
                        </div>
                        <div className='flex items-center'>
                          <span className='text-2xl mr-3'></span>
                          <span className='text-gray-700'>
                            ビーチまで徒歩3分
                          </span>
                        </div>
                        <div className='flex items-center'>
                          <span className='text-2xl mr-3'></span>
                          <span className='text-gray-700'>
                            光害の少ない絶好の星空観測ポイント
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                        充実の設備
                      </h3>

                      <div className='grid grid-cols-2 gap-4'>
                        <div className='bg-gray-50 p-4 rounded-lg'>
                          <div className='text-2xl mb-2'></div>
                          <h4 className='font-semibold text-gray-800'>
                            シャワー室
                          </h4>
                          <p className='text-sm text-gray-600'>
                            温水完備・清潔管理
                          </p>
                        </div>

                        <div className='bg-cyan-50 p-4 rounded-lg'>
                          <div className='text-2xl mb-2'></div>
                          <h4 className='font-semibold text-gray-800'>
                            ウォシュレット
                          </h4>
                          <p className='text-sm text-gray-600'>
                            最新設備・男女別
                          </p>
                        </div>

                        <div className='bg-gray-100 p-4 rounded-lg'>
                          <div className='text-2xl mb-2'></div>
                          <h4 className='font-semibold text-gray-800'>
                            キッチン
                          </h4>
                          <p className='text-sm text-gray-600'>
                            簡単な料理可能
                          </p>
                        </div>

                        <div className='bg-cyan-50 p-4 rounded-lg'>
                          <div className='text-2xl mb-2'></div>
                          <h4 className='font-semibold text-gray-800'>WiFi</h4>
                          <p className='text-sm text-gray-600'>高速WiFi完備</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* アクセス情報 */}
            <div className='mb-16'>
              <h2 className='text-3xl font-bold text-center text-gray-900 mb-12'>
                アクセス情報
              </h2>

              <div className='bg-gradient-to-br from-gray-500 to-cyan-500 rounded-2xl p-8 text-white'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                  <div>
                    <h3 className='text-2xl font-bold mb-6'>
                      小豆島へのアクセス
                    </h3>

                    <div className='space-y-4'>
                      <div className='bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4'>
                        <h4 className='font-bold mb-2'>フェリーで</h4>
                        <p className='text-gray-200'>
                          高松港より土庄港または草壁港へ
                          <br />
                          約60分～90分（便により異なる）
                        </p>
                      </div>

                      <div className='bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4'>
                        <h4 className='font-bold mb-2'>飛行機で</h4>
                        <p className='text-gray-200'>
                          大阪・神戸空港から高松空港へ
                          <br />
                          その後フェリーで小豆島へ
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className='text-2xl font-bold mb-6'>島内アクセス</h3>

                    <div className='space-y-4'>
                      <div className='bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4'>
                        <h4 className='font-bold mb-2'>お車で</h4>
                        <p className='text-gray-200'>
                          土庄港から約25分
                          <br />
                          草壁港から約35分
                          <br />
                          駐車場無料（20台まで）
                        </p>
                      </div>

                      <div className='bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4'>
                        <h4 className='font-bold mb-2'>バスで</h4>
                        <p className='text-gray-200'>
                          小豆島バス「小方」停留所から徒歩5分
                          <br />
                          事前連絡でお迎えサービスあり
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='mt-8 text-center'>
                  <div className='bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6'>
                    <h4 className='text-xl font-bold mb-2'>施設所在地</h4>
                    <p className='text-lg'>
                      〒761-4411 香川県小豆郡小豆島町小部甲2005-1
                    </p>
                  </div>
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
