import styled from 'styled-components';
import TitleImage from '../../images/cabagge/title.png';
export const Title = styled.div`
  width: 183px;
  height: 63px;
  margin-top: 86px;
  margin-bottom: 50px;
  background-size: 100% 100%;
  background-image: url(${TitleImage});
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    margin-top: 80px;
    width: 306px;
    height: 101px;
    background-repeat: no-repeat;
    background-size: 306px 101px;
  }

  @media screen and (min-width: 1280px) {
    position: absolute;
    margin-top: 0;
    width: 377px;
    margin-left: 0;
    height: 139px;
    top: 308px;
    left: 229px;
    background-repeat: no-repeat;
    background-size: contain;
  }
`;

export const Container = styled.div`
  max-width: 320px;
  padding: 0 20px;
  margin: 0 auto;
  overflow: hidden;
  padding-bottom: 25px;
  @media screen and (min-width: 767.98px) {
    max-width: 458px;
    padding: 0 16px;
  }
  @media screen and (min-width: 1279.98px) {
    max-width: 1280px;
    position: relative;
  }
`;

/* .title {
  width: 183px;
  height: 63px;
  margin-top: 86px;
  margin-bottom: 50px;
  background-size: 100% 100%;
  background-image: url(../../images/cabagge/title.png);
}

.container {
  max-width: 320px;
  padding: 0 20px;
  margin: 0 auto;
  overflow: hidden;
  padding-bottom: 25px;
}

@media screen and (min-width: 768px) {
  .container {
    max-width: 458px;
    padding: 0 16px;
  }

  .title {
    margin-bottom: 0;
    margin-top: 80px;
    width: 306px;
    height: 101px;
    background-repeat: no-repeat;
    background-size: 306px 101px;
  }
}

@media screen and (min-width: 1280px) {
  .container {
    max-width: 1280px;
    position: relative;
  }

  .title {
    position: absolute;
    margin-top: 0;
    width: 377px;
    margin-left: 0;
    height: 139px;
    top: 308px;
    left: 229px;
    background-repeat: no-repeat;
    background-size: contain;
  }
} */
