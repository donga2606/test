import products from "../../assets/data/products";
import Button from "../../components/button";
import ProductShow from "../../components/productShow";
import BrandCard from "../../components/utils/BrandCard";
import Image from "../../components/utils/Image";
import styles from "./HomePage.module.scss";
console.log(products);

function HomePage() {
  return (
    <>
      {/* main_banner section */}
      <section className="main_banner" id="main_banner">
        <Image imgUrl="../../assets/img/main-banner" alt="main_banner" />
      </section>
      {/* end main_banner section */}

      {/* what_happend section */}
      <section className={styles.what_happend} id="what_happend">
        <Image imgUrl="../../assets/img/introduction-bg" alt="introduction" />
        <div className={styles.what_happend__content}>
          <h2 className={styles.title}>What Happened!</h2>
          <p className={styles.des}>
            How to create mobile-optimized videos in minutes. Not a designer,
            every team makes a lot of videos Can be trimmed. Take the first step
            to your brand's success. How to create mobile-optimized videos in
            minutes.
          </p>
        </div>
      </section>
      {/* end what_happend section */}

      {/* best_product section */}
      <section className={styles.best_product} id="best_product">
        <div className={styles.background}>
          <h2 className={styles.title}>Best Product</h2>
          <p className={styles.des}>
            How to create mobile-optimized videos in minutes. Not a designer,
            every team makes a lot of videos Can be trimmed. Take the first{" "}
          </p>
          <ul className={styles.best_img_list}>
            <li className={styles.item}>
              <div className={styles.item__flower}>
                <Image imgUrl="../../assets/img/producticon-01" alt="number" />
              </div>
              <Image imgUrl="../../assets/img/best-image-01" alt="best image" />
              <div className={styles.box}>
                <p className={styles.script}>How to create mobile-optimized</p>
                <Image
                  imgUrl="../../assets/img/go-icon"
                  alt="go icon"
                  className={styles.go_icon}
                />
              </div>
            </li>

            <li className={styles.item}>
              <div className={styles.item__flower}>
                <Image imgUrl="../../assets/img/producticon-02" alt="number" />
              </div>
              <Image imgUrl="../../assets/img/best-image-02" alt="best image" />
              <div className={styles.box}>
                <p className={styles.script}>How to create mobile-optimized</p>
                <Image
                  imgUrl="../../assets/img/go-icon"
                  alt="go icon"
                  className={styles.go_icon}
                />
              </div>
            </li>
            <li className={styles.item}>
              <div className={styles.item__flower}>
                <Image imgUrl="../../assets/img/producticon-03" alt="number" />
              </div>
              <Image imgUrl="../../assets/img/best-image-03" alt="best image" />
              <div className={styles.box}>
                <p className={styles.script}>How to create mobile-optimized</p>
                <Image
                  imgUrl="../../assets/img/go-icon"
                  alt="go icon"
                  className={styles.go_icon}
                />
              </div>
            </li>
          </ul>
        </div>
      </section>
      {/* end best_product section*/}

      {/* Show_product section */}
      <section id="show_product" className={styles.show_product}>
        <div className="container">
          <div className={styles.wrapper}>
            <ProductShow cards={products} />
          </div>
        </div>
      </section>
      {/* end show_product section */}

      {/* brand_story section */}
      <section id="brand_story" className={styles.brand_story}>
        <div className="container">
          <div className={styles.wrapper}>
            <h2 className={styles.header}>brand story</h2>
            <p className={styles.content}>
              모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가
              아니더라도, 모든 팀에서 다듬을 수 있습니다. 브랜드의 성공을 위한
              첫 걸음을 내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
            </p>
            <div className={styles.colla}>
              <Image
                imgUrl="../../assets/img/window"
                className={styles.window}
                alt="window"
              />
              <div className={styles.colla__info}>
                <h3 className={styles.colla__title}>
                  What Happened’s Brand story
                </h3>
                <p className={styles.colla__desc}>
                  청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일
                  무엇을 풀이 옷을 봄바람이다. 새 천고에 놀이 내는 찾아 창공에
                  광야에서 살았으며, 듣는다. 수 있는 긴지라 사는가 낙원을 웅대한
                  아니다. 내는 이상 할지라도 피다. 피부가 불러 피고 인간의
                  타오르고 이성은 끝까지 칼이다. 쓸쓸한 희망의 못할 것은 목숨을
                  수 그들을 아름답고 고행을 끝에 설산에서 황금시대를 이상을
                  운다.{" "}
                </p>
                <Button>SEE MORE</Button>
              </div>
            </div>
            <Image
              imgUrl="../../assets/img/object-02"
              className={styles.img__name}
            />
            <Image
              imgUrl="../../assets/img/object-03"
              className={styles.img__plan}
            />
            <Image
              imgUrl="../../assets/img/object-01"
              className={styles.img__paper}
            />
            <Image
              imgUrl="../../assets/img/object-04"
              className={styles.img__flower}
            />
            <Image
              imgUrl="../../assets/img/object-06"
              className={styles.img__3book}
            />
            <Image
              imgUrl="../../assets/img/object-07"
              className={styles.img__1book}
            />
            <Image
              imgUrl="../../assets/img/object-05"
              className={styles.img__calendar}
            />
          </div>
        </div>
      </section>
      {/* end brand_story section*/}

      {/* happend issue section */}
      <section id="happend_issue" className={styles.happend_issue}>
        <div className="container">
          <div className={styles.wrapper}>
            <h2 className={styles.header}>Happened’s issue</h2>
            <p className={styles.content}>
              모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가
              아니더라도, 모든 팀에서 다듬을 수 있습니다. 브랜드의 성공을 위한
              첫 걸음을 내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
            </p>
            <Button>SEE MORE</Button>
            <div className={styles.brand_list}>
              <div className={styles.whpn}>
                <h3 className={styles.title}>WHPN ISSUE</h3>
                <Image
                  imgUrl="../../assets/img/news-img-01"
                  alt="news-img-01"
                  className={styles.arrow}
                />
                <Image
                  imgUrl="../../assets/img/news-object-03"
                  alt="news-object-03"
                  className={styles.coin}
                />
              </div>
              <BrandCard
                brand="A BRAND"
                imgUrl="../../assets/img/news-img-04"
              />
              <BrandCard
                brand="B BRAND"
                imgUrl="../../assets/img/news-img-03"
              />
              <BrandCard
                brand="C BRAND"
                red
                imgUrl="../../assets/img/news-img-04"
              />
              <BrandCard
                brand="D BRAND"
                imgUrl="../../assets/img/news-img-05"
              />
            </div>
            <Image
              imgUrl="../../assets/img/news-object-03_2"
              alt="news-object-02"
              className={styles.dice_5}
            />
            <Image
              imgUrl="../../assets/img/news-object-02"
              alt="news-object-02"
              className={styles.dice_3}
            />
            <Image
              imgUrl="../../assets/img/news-object-04"
              alt="news-object-04"
              className={styles.hot}
            />
            <Image
              imgUrl="../../assets/img/news-object-05"
              alt="news-object-05"
              className={styles.lol}
            />
          </div>
        </div>
      </section>
      {/* end happend_issue section*/}
    </>
  );
}

export default HomePage;
