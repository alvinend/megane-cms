import * as React from 'react'
import styled from 'styled-components'
import { color } from '../../utils'
import { fontsize } from '../../utils/fontsize'
import { screen } from '../../utils/screen'
import { StrongPointList } from '../atom/StrongPointList'

const StrongPointContainer = styled.div`
  width: 100vw;
  position: relative;
`
const StrongPointInnerContainer = styled.div`
  width: 85%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const OverviewContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

const OverviewDescContainer = styled.div`
  max-width: 800px;
  color: ${color.black};
  line-height: 2.1;
  font-size: ${fontsize.normal};
  margin-bottom: 30px;

  & > h3 {
    display: inline-block;
    font-size: ${fontsize.h2};
    font-weight: 600;
    line-height: 1.6;
  }
`


export const StrongPoint = React.forwardRef((
  props,
  ref
) => {
  return (
    <StrongPointContainer ref={ref}>\
      <StrongPointInnerContainer>
        <OverviewContainer>
          <OverviewDescContainer>
            <h3 className="section-title">Alasan untuk Memilih Kami</h3>
            <div>
            Kami berikan Garansi Purna Jual terbaik, termasuk Frame dan lensa, serta kenyamanan saat dipakai.
            </div>
          </OverviewDescContainer>
        </OverviewContainer>
        <StrongPointList
          title="Garansi untuk Frame, Lensa, dan Kenyamanan"
          desc={<div>
            Kami memberikan garansi untuk Frame, Lensa, dan Kenyamanan saat dipakai. Kerusakan apapun akan kami ganti dengan produk baru. Bahkan jika pelanggan hanya merasa tidak nyaman saat menggunakan produk kami, kami akan melayani dan memastikan kenyamanan mereka.
          </div>}
          imgLink="/img/garansi.avif"
          number='01'
        />
        <StrongPointList
          title="Gratis pengiriman seluruh Indonesia"
          desc={<div>
            Setiap pembelian kacamata Megane akan dikirimkan secara gratis ke seluruh wilayah Indonesia. Pembelian dapat dilakukan melalui beberapa marketplace terkemuka seperti Tokopedia, Shopee, Bukalapak, Lazada, dan Blibli. Gratis ongkir hanya berlaku untuk pembelian frame dan lensa.
          </div>}
          imgLink="/img/kirim.avif"
          number='02'
        />

        <StrongPointList
          title="Discount untuk Peserta BPJS dan Asuransi Lainnya"
          desc={<div>
            Untuk para pemegang kartu asuransi seperti BPJS, Prudential, AXA, Manulife, Panin, AIA, Sequis, Allianz, BCA, Astra, Zurich, Mega, Marine, BNI, Lippo, dll, kami memiliki kabar gembira untuk Anda! Anda dapat menikmati potongan harga hingga Rp 300.000 untuk setiap pembelian kacamata Megane, termasuk frame dan lensa.
          </div>}
          imgLink="/img/asuransi.jpg"
          number='03'
        />
      </StrongPointInnerContainer>
    </StrongPointContainer>
  )
})
