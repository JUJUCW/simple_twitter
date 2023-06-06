import { Link } from 'react-router-dom';
import style from './TweetListItem.module.scss';
import logo from '../../../../assets/icons/nav/nav_home.png';

export default function TweetListItem() {
  return (
      <>
          <div className={style.itemContainer}>
              {/* <Link to="/"> */}
              <div className={style.itemAvatar}>
                  <div className={style.avatarImage}>
                      <img src={logo} alt="avatar" />
                  </div>
              </div>
              <div className={style.container}>
                  {/* </Link> */}
                  <div className={style.itemInfo}>
                      <div className={style.accountInfo}>
                          <p>Apple</p>
                          <div className={style.accountInfoAccount}>
                              <span className={style.accountTitle}>@apple</span>
                              <span className={style.spot}></span>
                              <span className={style.tweetTime}>3 小時</span>
                          </div>
                      </div>
                  </div>

                  {/* <Link to="/"> */}
                  <div className={style.tweetContext}>
                      <p>
                          Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate
                          exercitation incididunt aliquip deserunt reprehenderit elit laborum.
                      </p>
                  </div>
                  {/* </Link> */}
                  <div className={style.infoIcons}>
                      <div className={style.iconReply}>
                          <div className={style.cursor}>
                              <img src={logo} alt="reply button" />
                          </div>
                          <span>13</span>
                      </div>
                      <div className={style.iconLike}>
                          <div className={style.cursor}>
                              <img className={style.likeBtn} src={logo} alt="like button" />
                          </div>
                          <span>76</span>
                      </div>
                  </div>
              </div>
          </div>

          <div className={style.itemContainer}>
              {/* <Link to="/"> */}
              <div className={style.itemAvatar}>
                  <div className={style.avatarImage}>
                      <img src={logo} alt="avatar" />
                  </div>
              </div>
              <div className={style.container}>
                  {/* </Link> */}
                  <div className={style.itemInfo}>
                      <div className={style.accountInfo}>
                          <p>Apple</p>
                          <div className={style.accountInfoAccount}>
                              <span className={style.accountTitle}>@apple</span>
                              <span className={style.spot}></span>
                              <span className={style.tweetTime}>3 小時</span>
                          </div>
                      </div>
                  </div>

                  {/* <Link to="/"> */}
                  <div className={style.tweetContext}>
                      <p>
                          Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate
                          exercitation incididunt aliquip deserunt reprehenderit elit laborum.
                      </p>
                  </div>
                  {/* </Link> */}
                  <div className={style.infoIcons}>
                      <div className={style.iconReply}>
                          <div className={style.cursor}>
                              <img src={logo} alt="reply button" />
                          </div>
                          <span>13</span>
                      </div>
                      <div className={style.iconLike}>
                          <div className={style.cursor}>
                              <img className={style.likeBtn} src={logo} alt="like button" />
                          </div>
                          <span>76</span>
                      </div>
                  </div>
              </div>
          </div>

          <div className={style.itemContainer}>
              {/* <Link to="/"> */}
              <div className={style.itemAvatar}>
                  <div className={style.avatarImage}>
                      <img src={logo} alt="avatar" />
                  </div>
              </div>
              <div className={style.container}>
                  {/* </Link> */}
                  <div className={style.itemInfo}>
                      <div className={style.accountInfo}>
                          <p>Apple</p>
                          <div className={style.accountInfoAccount}>
                              <span className={style.accountTitle}>@apple</span>
                              <span className={style.spot}></span>
                              <span className={style.tweetTime}>3 小時</span>
                          </div>
                      </div>
                  </div>

                  {/* <Link to="/"> */}
                  <div className={style.tweetContext}>
                      <p>
                          Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate
                          exercitation incididunt aliquip deserunt reprehenderit elit laborum.
                      </p>
                  </div>
                  {/* </Link> */}
                  <div className={style.infoIcons}>
                      <div className={style.iconReply}>
                          <div className={style.cursor}>
                              <img src={logo} alt="reply button" />
                          </div>
                          <span>13</span>
                      </div>
                      <div className={style.iconLike}>
                          <div className={style.cursor}>
                              <img className={style.likeBtn} src={logo} alt="like button" />
                          </div>
                          <span>76</span>
                      </div>
                  </div>
              </div>
          </div>
          <div className={style.itemContainer}>
              {/* <Link to="/"> */}
              <div className={style.itemAvatar}>
                  <div className={style.avatarImage}>
                      <img src={logo} alt="avatar" />
                  </div>
              </div>
              <div className={style.container}>
                  {/* </Link> */}
                  <div className={style.itemInfo}>
                      <div className={style.accountInfo}>
                          <p>Apple</p>
                          <div className={style.accountInfoAccount}>
                              <span className={style.accountTitle}>@apple</span>
                              <span className={style.spot}></span>
                              <span className={style.tweetTime}>3 小時</span>
                          </div>
                      </div>
                  </div>

                  {/* <Link to="/"> */}
                  <div className={style.tweetContext}>
                      <p>
                          Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate
                          exercitation incididunt aliquip deserunt reprehenderit elit laborum.
                      </p>
                  </div>
                  {/* </Link> */}
                  <div className={style.infoIcons}>
                      <div className={style.iconReply}>
                          <div className={style.cursor}>
                              <img src={logo} alt="reply button" />
                          </div>
                          <span>13</span>
                      </div>
                      <div className={style.iconLike}>
                          <div className={style.cursor}>
                              <img className={style.likeBtn} src={logo} alt="like button" />
                          </div>
                          <span>76</span>
                      </div>
                  </div>
              </div>
          </div>
          <div className={style.itemContainer}>
              {/* <Link to="/"> */}
              <div className={style.itemAvatar}>
                  <div className={style.avatarImage}>
                      <img src={logo} alt="avatar" />
                  </div>
              </div>
              <div className={style.container}>
                  {/* </Link> */}
                  <div className={style.itemInfo}>
                      <div className={style.accountInfo}>
                          <p>Apple</p>
                          <div className={style.accountInfoAccount}>
                              <span className={style.accountTitle}>@apple</span>
                              <span className={style.spot}></span>
                              <span className={style.tweetTime}>3 小時</span>
                          </div>
                      </div>
                  </div>

                  {/* <Link to="/"> */}
                  <div className={style.tweetContext}>
                      <p>
                          Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate
                          exercitation incididunt aliquip deserunt reprehenderit elit laborum.
                      </p>
                  </div>
                  {/* </Link> */}
                  <div className={style.infoIcons}>
                      <div className={style.iconReply}>
                          <div className={style.cursor}>
                              <img src={logo} alt="reply button" />
                          </div>
                          <span>13</span>
                      </div>
                      <div className={style.iconLike}>
                          <div className={style.cursor}>
                              <img className={style.likeBtn} src={logo} alt="like button" />
                          </div>
                          <span>76</span>
                      </div>
                  </div>
              </div>
          </div>
      </>
  );
}
