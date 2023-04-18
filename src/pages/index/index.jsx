import { Component, useEffect, useState } from "react";
import { View, Text, RootPortal, Button } from "@tarojs/components";
import { createPortal } from "@tarojs/react";
import "./index.scss";

export default function Index() {
  const [dom, setDom] = useState(null);

  useEffect(() => {
    const dom = document.getElementById("my-portal");
    setDom(dom);
    setTimeout(() => {
      setDom(null);
    }, 3000);
  }, []);

  return (
    <View className="index">
      <Text>Hello world!</Text>
      <View id="my-portal"></View>
      {dom && createPortal(<View>你好世界</View>, dom)}
    </View>
  );
}
