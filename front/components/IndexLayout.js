import React from "react";
import { useCallback, useEffect } from "react";
import propTypes from "prop-types";
import Link from "next/link";
import { Col, Row, Menu, Button } from "antd";

const IndexLayout = ({ children }) => {


  return (
    <Row style={{ width: "1100px", margin: "0 auto" }}>
      <Col span={4}></Col>
      <Col span={16}>상단바</Col>
      <Col span={4}></Col>
      <Col span={4}></Col>
      <Col span={4} defaultChecked>
        <Menu mode="inline" style={{ alignItems: "center" }}>
          <Menu.Item>
            <Link href="/">인트로오브유</Link>
          </Menu.Item>
          <Menu.Item key="intro">
            <Link href="/intro">자기소개서</Link>
          </Menu.Item>
          <Menu.Item key="community">
            <Link href="/community">커뮤니티</Link>
          </Menu.Item>
        </Menu>
      </Col>
      <Col span={12}>{children}</Col>
      <Col span={4}></Col>
    </Row>
  );
};

IndexLayout.propTypes = {
  children: propTypes.node.isRequired,
};

export default IndexLayout;
