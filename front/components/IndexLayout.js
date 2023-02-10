import React from "react";
import { useCallback, useEffect } from "react";
import propTypes from "prop-types";
import Link from "next/link";
import { Col, Row, Menu, Button } from "antd";
import styled from 'styled-components';

const IndexLayout = ({ children }) => {

  return (
    <Row
      style={{
        width: "900px",
        margin: "0 auto",
      }}
    >
      <Col span={3}></Col>
      <Col
        span={18}
        style={{
          background: "teal",
          marginTop: "10px",
          height: "100px",
        }}
      >
        <div style={{ color: "white", fontWeight: "bold" }}>
          sehwan's portfolio
        </div>
      </Col>
      <Col span={3}></Col>

      <Col span={3}></Col>
      <Col span={3} defaultChecked>
        <Menu mode="inline" style={{ alignItems: "center" }}>
          <Menu.Item>
            <Link href="/">자기소개</Link>
          </Menu.Item>
          <Menu.Item key="resume">
            <Link href="/resume">이력서</Link>
          </Menu.Item>
          <Menu.Item key="comment">
            <Link href="/comment">코멘트</Link>
          </Menu.Item>
        </Menu>
      </Col>
      <Col span={15}>{children}</Col>
      <Col span={3}></Col>
    </Row>
  );
};

IndexLayout.propTypes = {
  children: propTypes.node.isRequired,
};

export default IndexLayout;
