import styles from "./page.module.css";

export default function Info({ params }: { params: { data: string } }) {
  switch (params.data) {
    case "privacy":
      return (
        <div className={styles.textContainer}>
          <p>
            <strong>Privacy Policy</strong>
          </p>
          <p>
            Thank you for visiting Odin Cloth Wear. This Privacy Policy explains
            how we collect, use, and protect your personal information. By using
            our website, you agree to the terms of this Privacy Policy.
          </p>
          <p>
            <strong>Information We Collect</strong>
          </p>
          <ul>
            <li>
              Personal Information: When you make a purchase or sign up for an
              account, we may collect your name, email address, shipping
              address, and payment information.
            </li>
            <li>
              Usage Information: We may collect information about how you
              interact with our website, such as the pages you visit and the
              links you click.
            </li>
            <li>
              Cookies: We use cookies to improve your browsing experience and
              track website analytics. You can manage your cookie preferences in
              your browser settings.
            </li>
          </ul>
          <p>
            <strong>How We Use Your Information</strong>
          </p>
          <ul>
            <li>
              Order Processing: We use your personal information to process and
              fulfill your orders.
            </li>
            <li>
              Communication: We may send you emails about your orders or
              promotional offers.
            </li>
            <li>
              Improve Our Services: We analyze usage data to improve our website
              and services.
            </li>
          </ul>
          <p>
            <strong>Data Sharing</strong>
          </p>
          <p>
            We may share your personal information with third-party service
            providers, such as shipping companies, to fulfill your orders. We do
            not sell or rent your personal information to third parties.
          </p>
          <p>
            <strong>Data Security</strong>
          </p>
          <p>
            We take reasonable measures to protect your personal information
            from unauthorized access or disclosure.
          </p>
          <p>
            <strong>Changes to This Policy</strong>
          </p>
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page.
          </p>
          <p>
            <strong>Contact Us</strong>
          </p>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at{" "}
            <a href="mailto:odinclothwear@gmail.com">odinclothwear@gmail.com</a>
            .
          </p>
          <hr></hr>
        </div>
      );
    case "delivery":
      return (
        <div className={styles.textContainer}>
          <p>
            <strong>Delivery Policy</strong>
          </p>
          <p>
            At Odin Cloth Wear, we strive to ensure that your order is delivered
            to you in a timely and efficient manner. Here are some details about
            our delivery process:
          </p>
          <ul>
            <li>
              <strong>Shipping Methods:</strong> We offer standard and expedited
              shipping options. The delivery time may vary depending on your
              location and the shipping method chosen.
            </li>
            <li>
              <strong>Shipping Costs:</strong> Shipping costs are calculated
              based on the weight of your order and your location. You can view
              the shipping costs at checkout before completing your purchase.
            </li>
            <li>
              <strong>Order Processing:</strong> Orders are typically processed
              within 1-2 business days. Once your order has been processed, you
              will receive a confirmation email with tracking information.
            </li>
            <li>
              <strong>Delivery Time:</strong> The delivery time depends on the
              shipping method chosen and your location. Standard shipping
              usually takes 3-7 business days, while expedited shipping takes
              1-3 business days.
            </li>
          </ul>
          <p>
            <strong>Return Policy</strong>
          </p>
          <p>
            We want you to be completely satisfied with your purchase from Odin
            Cloth Wear. If you are not satisfied for any reason, you may return
            the item(s) within 30 days of receiving your order for a refund or
            exchange. Here are some important details about our return policy:
          </p>
          <ul>
            <li>
              <strong>Eligibility:</strong> To be eligible for a return, your
              item must be unused, unworn, and in the same condition that you
              received it. It must also be in the original packaging.
            </li>
            <li>
              <strong>Return Process:</strong> To initiate a return, please
              contact our customer service team at{" "}
              <a href="mailto:odinclothwear@gmail.com">
                odinclothwear@gmail.com
              </a>{" "}
              with your order number and the reason for the return. We will
              provide you with a return authorization and instructions on how to
              return the item(s).
            </li>
            <li>
              <strong>Refund:</strong> Once your return is received and
              inspected, we will process your refund to the original method of
              payment. Please note that shipping costs are non-refundable.
            </li>
            <li>
              <strong>Exchange:</strong> If you would like to exchange an item,
              please contact our customer service team for assistance. Exchanges
              are subject to availability.
            </li>
          </ul>
          <p>
            <strong>Contact Us</strong>
          </p>
          <p>
            If you have any questions about our delivery or return policy,
            please contact us at{" "}
            <a href="mailto:odinclothwear@gmail.com">odinclothwear@gmail.com</a>
            . We are here to help!
          </p>
          <hr></hr>
        </div>
      );
    case "terms":
      return (
        <div className={styles.textContainer}>
          <p>
            <strong>Terms and Conditions</strong>
          </p>
          <p>
            These terms and conditions (&quot;Terms&quot;) govern your use of
            the Odin Cloth Wear website (&quot;Website&quot;) and the purchase
            of products from Odin Cloth Wear. By using the Website or purchasing
            products from Odin Cloth Wear, you agree to these Terms. If you do
            not agree to these Terms, please do not use the Website or purchase
            products from Odin Cloth Wear.
          </p>
          <p>
            <strong>1. Products</strong>
          </p>
          <ul>
            <li>
              <strong>Product Descriptions:</strong> We make every effort to
              ensure that the descriptions and images of our products are
              accurate. However, we cannot guarantee that your computer or
              device will display these accurately.
            </li>
            <li>
              <strong>Availability:</strong> All products are subject to
              availability. We may limit the quantity of products available for
              purchase.
            </li>
            <li>
              <strong>Pricing:</strong> Prices for products are as displayed on
              the Website and are subject to change without notice.
            </li>
          </ul>
          <p>
            <strong>2. Orders</strong>
          </p>
          <ul>
            <li>
              <strong>Order Acceptance:</strong> Your order is an offer to
              purchase products from Odin Cloth Wear. We reserve the right to
              refuse or cancel any order for any reason.
            </li>
            <li>
              <strong>Payment:</strong> Payment for products is due at the time
              of purchase. We accept payment on delivery.
            </li>
          </ul>
          <p>
            <strong>3. Shipping and Delivery</strong>
          </p>
          <ul>
            <li>
              <strong>Shipping:</strong> We will ship your order to the address
              provided at the time of purchase. Shipping costs and delivery
              times may vary depending on your location and the shipping method
              chosen.
            </li>
            <li>
              <strong>Delivery:</strong> We will make every effort to deliver
              your order in a timely manner. However, we cannot guarantee
              delivery times and are not responsible for any delays caused by
              third-party shipping carriers.
            </li>
          </ul>
          <p>
            <strong>4. Returns and Exchanges</strong>
          </p>
          <ul>
            <li>
              <strong>Return Policy:</strong> Our return policy is as described
              in our Return Policy section above.
            </li>
            <li>
              <strong>Exchange Policy:</strong> Our exchange policy is as
              described in our Return Policy section above.
            </li>
          </ul>
          <p>
            <strong>5. Privacy</strong>
          </p>
          <ul>
            <li>
              <strong>Privacy Policy:</strong> Your use of the Website and the
              information you provide to us is governed by our Privacy Policy,
              which is incorporated into these Terms by reference.
            </li>
          </ul>
          <p>
            <strong>6. Limitation of Liability</strong>
          </p>
          <ul>
            <li>
              <strong>Disclaimer:</strong> Odin Cloth Wear is not liable for any
              direct, indirect, incidental, special, or consequential damages
              arising out of or in any way connected with your use of the
              Website or the purchase of products from Odin Cloth Wear.
            </li>
          </ul>
          <p>
            <strong>7. Changes to Terms</strong>
          </p>
          <ul>
            <li>
              <strong>Modification:</strong> Odin Cloth Wear reserves the right
              to modify these Terms at any time. Any changes will be effective
              immediately upon posting on the Website. Your continued use of the
              Website or purchase of products from Odin Cloth Wear after any
              such changes constitutes your acceptance of the modified Terms.
            </li>
          </ul>
          <p>
            <strong>Contact Us</strong>
          </p>
          <p>
            If you have any questions about these Terms, please contact us at{" "}
            <a href="mailto:odinclothwear@gmail.com">odinclothwear@gmail.com</a>
            .
          </p>
          <hr />
        </div>
      );
    case "about":
      return (
        <div className={styles.textContainer}>
          <p>
            <strong>About Us</strong>
          </p>
          <p>
            Welcome to Odin Cloth Wear, where style meets comfort! We are a
            local clothing brand dedicated to providing high-quality,
            fashionable clothing for men and women. Our mission is to create
            clothing that not only looks good but feels good too.
          </p>
          <p>
            At Odin Cloth Wear, we believe that fashion should be accessible to
            everyone. That&#39;s why we offer a wide range of sizes and styles
            to suit all body types and preferences. Whether you&#39;re looking
            for casual everyday wear or something more formal for a special
            occasion, we&#39;ve got you covered.
          </p>
          <p>
            We take pride in our attention to detail and commitment to quality.
            Each piece in our collection is carefully crafted using the finest
            materials to ensure a comfortable fit and long-lasting durability.
            From our stylish tops and bottoms to our cozy outerwear, every item
            is designed with you in mind.
          </p>
          <p>
            But Odin Cloth Wear is more than just a clothing brand – we&#39;re a
            community. We believe in supporting local artisans and businesses,
            which is why we source our materials locally whenever possible. We
            also strive to be environmentally conscious, using sustainable
            practices in our production process.
          </p>
          <p>
            Thank you for choosing Odin Cloth Wear. We hope you love our
            clothing as much as we do!
          </p>
          <hr />
        </div>
      );
    default:
      return <div className={styles.textContainer}>Invalid page</div>;
  }
}
