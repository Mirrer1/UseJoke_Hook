import styled from 'styled-components';

const JokingWrapper = styled.section`
  & > header {
    text-align: center;
    color: #fff;
    font-size: 3rem;
    font-weight: 600;
    letter-spacing: 0px;
    margin-bottom: 0.2em;
    text-shadow: 1px 1px rgba(0, 0, 0, 0.02), 2px 2px rgba(0, 0, 0, 0.02), 3px 3px rgba(0, 0, 0, 0.02),
      4px 4px rgba(0, 0, 0, 0.02), 5px 5px rgba(0, 0, 0, 0.02), 6px 6px rgba(0, 0, 0, 0.02), 7px 7px rgba(0, 0, 0, 0.02);
  }

  & > p {
    text-align: center;
    color: #60666d;
    font-size: 1rem;
    opacity: 60%;
    line-height: 1.8em;
    margin-bottom: 2em;
  }

  & > select {
    text-align: center;
    display: block;
    width: 100%;
    margin: 0 auto;
    padding: 0.3em;
    border: none;
    outline: none;
    font-size: 1.2rem;
    color: #60666d;
    font-family: 'Open Sans', 'Helvetica Neue', 'Segoe UI', 'Calibri', 'Arial', sans-serif;
    margin-bottom: 2em;
    -webkit-box-shadow: 0px 5px 12px -1px rgba(0, 0, 0, 0.27);
    box-shadow: 0px 5px 12px -1px rgba(0, 0, 0, 0.27);
  }

  & > div {
    font-size: 1.3rem;
  }
`;

export default JokingWrapper;
