import React from 'react';
import '../styles/AmazonPicks.css';

function Supplies() {
  return (
    <div className="Shop">
      <h2>Baking Supplies</h2>
      <a
        href="https://www.amazon.com/gp/aw/d/B07M7M898T/?_encoding=UTF8&pd_rd_plhdr=t&aaxitk=b48f6b7fe3072783a39b6680e9b9bfe7&hsa_cr_id=5869848300401&qid=1714672656&sr=1-1-9e67e56a-6f64-441f-a281-df67fc737124&ref_=sbx_be_s_sparkle_lsi4d_asin_0_img&pd_rd_w=3jut8&content-id=amzn1.sym.417820b0-80f2-4084-adb3-fb612550f30b%3Aamzn1.sym.417820b0-80f2-4084-adb3-fb612550f30b&pf_rd_p=417820b0-80f2-4084-adb3-fb612550f30b&pf_rd_r=9W4R6ZACVH4HA483TPEF&pd_rd_wg=3Ru9I&pd_rd_r=55a64020-0be3-4ba5-9eb2-1051fd2863b51"
        target="_blank" // opens the link in a new tab
        rel="noopener noreferrer" // security best practice when using target="_blank"
      >
        <img
          className="picture5"
          src="images/pexels-karolina-grabowska-5632396.jpg"
          alt="Baking Products"
        />
      </a>
      <p>
        <a
          href="https://www.amazon.com/gp/aw/d/B07M7M898T/?_encoding=UTF8&pd_rd_plhdr=t&aaxitk=b48f6b7fe3072783a39b6680e9b9bfe7&hsa_cr_id=5869848300401&qid=1714672656&sr=1-1-9e67e56a-6f64-441f-a281-df67fc737124&ref_=sbx_be_s_sparkle_lsi4d_asin_0_img&pd_rd_w=3jut8&content-id=amzn1.sym.417820b0-80f2-4084-adb3-fb612550f30b%3Aamzn1.sym.417820b0-80f2-4084-adb3-fb612550f30b&pf_rd_p=417820b0-80f2-4084-adb3-fb612550f30b&pf_rd_r=9W4R6ZACVH4HA483TPEF&pd_rd_wg=3Ru9I&pd_rd_r=55a64020-0be3-4ba5-9eb2-1051fd2863b51"
          target="_blank" // opens the link in a new tab
          rel="noopener noreferrer" // security best practice when using target="_blank"
        >
          Products that can help you on your journey.
        </a>
      </p>
    </div>
  );
}

export default Shop;