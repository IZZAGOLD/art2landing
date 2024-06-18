'use client'
import React from 'react'
import './styles.css'
import ExportedImage from 'next-image-export-optimizer'
import img from '@assets/img/img.jpg'

export const SectionCards = () => {
  return (
    <>
      <ul id={'cards'}>
        <li className={'card'} id={'card_1'}>
          <div className={'card__content'}>
            <div>
              <h2>Card1</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <figure>
              <ExportedImage src={img} alt={'img'} />
            </figure>
          </div>
        </li>
        <li className={'card'} id={'card_2'}>
          <div className={'card__content'}>
            <div>
              <h2>Card1</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <figure>
              <ExportedImage src={img} alt={'img'} />
            </figure>
          </div>
        </li>
        <li className={'card'} id={'card_3'}>
          <div className={'card__content'}>
            <div>
              <h2>Card1</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <figure>
              <ExportedImage src={img} alt={'img'} />
            </figure>
          </div>
        </li>
        <li className={'card'} id={'card_4'}>
          <div className={'card__content'}>
            <div>
              <h2>Card1</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <figure>
              <ExportedImage src={img} alt={'img'} />
            </figure>
          </div>
        </li>
      </ul>
      <aside>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem repellat
          non ratione eum provident quaerat obcaecati dicta autem voluptates sit
          cum quis distinctio, atque sint commodi reprehenderit perspiciatis
          iure velit molestiae eos molestias ipsa nihil quia? Porro tempore in
          fugit, aspernatur et temporibus aliquam magnam adipisci deleniti dicta
          repellat alias nostrum impedit quidem odit excepturi nam. Itaque
          numquam unde quae dignissimos exercitationem placeat, ipsa amet
          tempora vitae ullam animi! Hic asperiores in esse atque expedita
          dolorem officia illo commodi fugit earum ab, assumenda optio, sed
          repellat. Maiores laudantium reprehenderit suscipit accusamus
          assumenda, debitis nemo ut sapiente numquam doloremque alias explicabo
          minus autem harum illum dicta. Unde obcaecati inventore repellat id
          eligendi eaque, rerum aliquam maiores aspernatur cumque tenetur quo
          qui mollitia atque quasi voluptate ipsum neque explicabo voluptatem
          quibusdam beatae quae iste vero doloribus! Natus libero quibusdam
          molestias harum atque, assumenda doloribus quis, quam corporis,
          voluptas suscipit magni! Enim sapiente totam consequatur repellat
          maxime placeat perferendis iste maiores soluta, obcaecati incidunt
          expedita eius cumque ipsa quo sed. Minus distinctio culpa cumque
          labore nulla laborum ex, explicabo magni mollitia eaque aliquam vero
          blanditiis quae, id necessitatibus error voluptas harum tempora sint
          porro. Facilis beatae quasi soluta et ipsum suscipit repellendus
          inventore.
        </p>
      </aside>
    </>
  )
}
