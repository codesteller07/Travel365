import React from 'react';
import '../styles/main-content.scss';

export default function Main() {
  return (
    <main className="container">
      {/* Promo Deals */}
      <section>
        <h3>Grab these promo deals</h3>
        <div className="promo-grid">
          <div className="promo-card blue">
            <span className="overlay"></span>
            <span>16:9</span>
          </div>
          <div className="promo-card purple">
            <span className="overlay"></span>
            <span>16:9</span>
          </div>
          <div className="promo-card green">
            <span className="overlay"></span>
            <span>16:9</span>
            <div className="nav-icon">
              <span className="material-icons-outlined">chevron_right</span>
            </div>
          </div>
        </div>
      </section>

      {/* Flash Deals */}
      <section>
        <div className="carousel-header">
          <h3>Flash deals near you</h3>
          <div className="controls">
            <button><span className="material-icons-outlined">chevron_left</span></button>
            <button><span className="material-icons-outlined">chevron_right</span></button>
          </div>
        </div>

        <div className="flash-deals">
          {/* Item 1 */}
          <div className="deal-card">
            <div className="image-container">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqOz-5bbw8BOFXqoj2w0ECxe9oCtGndrOGsMN57kx6stoDjy_3gsb3T6VnJkD5aIMs-kIk5pTwcE8CnkC3hRnSFQA_eTao5S2y10H94Bw-xjExL2EZvCA3xzUouYWfP0choRn97nYZc5nLMZGa-xSHK5Z7obspunk9ejX_Nnyp-idSJO5FOGyHWYk1hvtjLj9GnEr7FGllmDG4ohJKukOnxM_7nBZhTJ-JE6W9Or0UyOROIavCWppxRFiDdZ8MYO_BXp-QYKsaPP4" alt="Hotel Malaga" />
              <div className="badges">
                <span className="special">Special</span>
                <span className="discount">-25%</span>
              </div>
              <button className="fav-btn">
                <span className="material-icons-outlined text-sm">favorite_border</span>
              </button>
            </div>
            <div className="card-content">
              <div className="location">Malaga</div>
              <h4>Hotel Malaga</h4>
              <div className="rating">
                <span className="material-icons-round star">star</span> 4.8 (120 reviews)
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="deal-card">
            <div className="image-container">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDS18wCrV0V3peCD3fOyRnF12iLG5vSapkyjJIRTgilVQp1wDJtCUoCZHssGJR1LT-YSZugrqFtrosUtF5OhKdobMnMvkxmcC_i3Heffh7es9_vA5GsAncMfErvkUcx527MavFcKQptrqAxpGgSheeDsKdgMMg_9utCxhDJqXeys_KZDdrfg68dBCm4g0yjTSLk7nb0YH5x4hNeRgSgCDcwvUGa7pgkU7zbh392B62l5649MTSNenQIiNwk2ulqhymTMGsovLKEPK0" alt="Resort Stay" />
              <div className="badges">
                <span className="hot">Hot</span>
              </div>
            </div>
            <div className="card-content">
              <div className="location">Bali</div>
              <h4>Ocean View Resort</h4>
              <div className="rating">
                <span className="material-icons-round star">star</span> 4.9 (850 reviews)
              </div>
            </div>
          </div>

          {/* Item 3 */}
          <div className="deal-card">
            <div className="image-container">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrr-pBJcAVSRqu5EC35S4jiSAUXRdjxiOY2zfUjv-grsCezhhkDn97fyG-EzSLcNZaBz5UD2_Y-a1LAEZFRdk-VMcN3Gt2pNK59L-1FU9ypf-XfkWooWhFOlRG-5UzsS7CXBtLhN5dmiu1P5u6WKoLdFwbPS-CwdIr1_wU4_664S3Cqav8c7MeP_4D10fXaEzhgy-u505jULfcFLWDNZC0K4DKTS5lNogGiuvHq3LKDrzT8yHMAVZ_onrwzge_u4s3TVTtoCcBJck" alt="City Hotel" />
              <div className="badges">
                <span className="special">Special</span>
                <span className="discount">-30%</span>
              </div>
            </div>
            <div className="card-content">
              <div className="location">Paris</div>
              <h4>Grand Hotel Paris</h4>
              <div className="rating">
                <span className="material-icons-round star">star</span> 4.7 (320 reviews)
              </div>
            </div>
          </div>

          {/* Item 4 */}
          <div className="deal-card">
            <div className="image-container">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNTUIg72kT1UJsZKJe1E5le2Yu1JL33Qvhb0qoG_gNrD7LrEsMYA0oqk5pCbp8aO8Bfz8f-0ZwK1E7ph30JyyI850XqYRAUkPS36bFCMaT8-V6U9F-W4Gq1dqxpUqKq9mPiT9osjlYyaKD9exJArOWnh0LmvuW-pqQHiW7w65XR11MgackZhd5f271dTzwxAwF3uU4HRGUBwpCtKaevblNMnZWFjMmnxu4TT8mzqHtbHkCdQXCuvvn7ztdmo56P2XcHrMBRm9O-6Y" alt="Mountain Lodge" />
              <div className="badges">
                <span className="special">Special</span>
                <span className="discount">-20%</span>
              </div>
            </div>
            <div className="card-content">
              <div className="location">Swiss Alps</div>
              <h4>Mountain Lodge</h4>
              <div className="rating">
                <span className="material-icons-round star">star</span> 4.9 (45 reviews)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section>
        <h3>Our popular destinations</h3>
        <div className="destination-grid">
          {['Algarve', 'Florence', 'Malaga', 'Santorini', 'Barcelona'].map((place, idx) => (
            <div className="dest-item" key={idx}>
              <div className="img-wrap">
                {/* Using the images from the original HTML based on index order */}
                <img src={[
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuAlmZQSzzCsyeFdg-tVQB4_epKzqnRyWvXwyUYblGhTIfj92QVswrWoJF4oE67X_TtedXsAlV1Gk85fULP0VW6P3zFlN3HptXVkJlBPMicaTQdvOtA3_-aeWugXQiBR8gDU3erepJiwKcl-yVzVRUCIw9XnXWgaxjUCHlQIE5OMQmOsMPsztiIm1kmT4YKFmmgkSwNA4GTGJ-Pcuhx4RcDCSqL01z7LERBuuhL06DjfMRikcyF9U4lrmt6aSm3R8PdDU5ktgnaZhfM",
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuA6cdMagrOmh51dYYrwtyUYR3914HpPuw4Zh3DzAATD6d8vteHc-IsOPARB3pAu5daPigolz2R7THwBLMhfSYEwKYCisCYhDE_nxmAC7tLM3Ur4sh0u4fHB7-stHWars0hdxoLJQuV3revI5ngBtRi_dA_o12cKNzEvFSvQAc-iHyvIrrriMnMiyRpOUe5ukMnnm13FEcH90tNsfcb44YM29tQFLOmUPAh-6Wz_b_RV8fqEfJOdK1H1GOHsBmRVSXOlam92oxYiHII",
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuAeOx6mPqIU31HHPOzXUqXddBj-fCbR75T4vCfFFFW-tQIu0KjrWAW6H_NaOJFzbw-wijvuGMLwAZcImUCCpPqNqrLauMtC0G8GE3GN814futVuSDBke54z9wutftIrctlAXeYDRGgrl10T3r0dyveawy3F4EY4DpcX32fg3dKv2I-mf4TyDjPoJS6_UzTcfLdIDCH4dcD6lepVhE8Y2KI_DdR4lSZXQ1Uvi7QnS25BMLXTgMLMRl8P9j7-nSgePUK6KEY1G_YfV8M",
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuBoiSlWISVdu_lvK-a3FC7zcC-jVpGWZxXygubQC9rhRmuqaJyDOIMOE-lZ1yzqs8QUQ-wjwOB7-sgQSAQZalSEiuTX5rJiqaPGN8Thf--lxpzwdYUIVOXyc9-D8uuwEcHZIJ_aXCLZv6APE_3AElJPHyx-H4q_SuYPeltRsaY4kHbk0zAU_Im5E_vCKamNgpWDLa4o_dzcotSJj6xnxQvBd2XYtHfGYijUBkWjHJvJ2-m9X4s_Vvo3tLMZvkqDN8mJqda8z2EGA28",
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuAnTpPQGTg8FWyQIj42FmqkZwHkVVNsE1ZZiTynsqbociNDpDx2zWMpVYsVBAsG69a22kdjQtoeXoiQ7C3CeYhRe4bHr2K-arY3IBI2ILDwx_-Jg2wD2ZE79wKshnjNKdx1xojXVQrFgGQeab7aigum0e07D-Ivhu4j2PdNZY0-4phHue4l2PNlQ-_sZ6QlYWnfittLhx-OKf6dLUQQvGrIIyifAgyQObh_9T_I4Q1C9yVPmREwshBEHa57Exi-QuXHeEllDcpVqII"
                ][idx]} alt={place} />
              </div>
              <p>{place}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Hot Deals Banner */}
      <section className="hot-deals-banner">
        <div className="bg-pattern"></div>
        <div className="banner-content">
          <div className="left">
            <div className="icon-circle">
              <span className="material-icons-round">local_fire_department</span>
              <span className="material-icons-round">local_fire_department</span>
            </div>
            <div className="text">
              <h3>Check out our weekly hot deals</h3>
              <p>Don't miss out on limited time offers</p>
            </div>
          </div>
          <button>See Deals</button>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <h3>Frequently Asked Questions (FAQ)</h3>
        <div className="faq-list">
          {[
            {
              question: "How do you collect payment?",
              answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
              question: "How do I claim a coupon offer?",
              answer: "Navigate to the checkout page and enter your coupon code in the designated field. The discount will be applied automatically to your total."
            },
            {
              question: "Which payment provider do you use to collect my payments?",
              answer: "We use Stripe and PayPal to ensure secure and reliable transactions for all our customers globally."
            },
            {
              question: "Which payment provider do you use to collect my payments?",
              answer: "This is a duplicate question from the design but serves to show the expandable functionality."
            },
            {
              question: "Which payment provider do you use to collect my payments?",
              answer: "This is a duplicate question from the design but serves to show the expandable functionality."
            }
          ].map((item, index) => (
            <details className="group" key={index} open={index === 0}>
              <summary>
                <h4>{item.question}</h4>
                <span className="material-icons-outlined">expand_more</span>
              </summary>
              <div className="answer">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
