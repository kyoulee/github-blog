import path from "path";
import { visit } from "unist-util-visit";
import { Node, Parent, Literal } from "unist";
import { VFile } from "vfile";

// Node 정보를 깔끔하게 출력하기 위한 헬퍼 함수 (개선 버전)
function cleanNode(node: Node | Parent | Literal) {
  const { position, ...rest } = node;
  const data: { [key: string]: any } = { ...rest };
  if ("value" in node && typeof node.value === "string") {
    data.value = node.value;
  }
  if ("children" in node) {
    data.childrenCount = (node.children as Node[]).length;
    if (node.type === "wikiLink" || node.type === "link") {
      data.childrenDetails = (node.children as Node[]).map((child) => ({
        type: child.type,
        value: "value" in child ? (child.value as string) : null,
      }));
    }
  }
  if ("data" in node && typeof node.data === "object" && node.data !== null) {
    data.customData = node.data;
  }
  return data;
}

/**
 * 모든 AST 노드를 방문하여 콘솔에 로깅하는 임시 remark 플러그인입니다.
 * @param label - 로그를 구분하기 위한 레이블 (예: "BEFORE WIKILINK", "AFTER WIKILINK")
 */
function logNodes(label: string) {
  return (tree: Node, file: VFile) => {
    const filePath = file.path ? path.basename(file.path) : "Unknown";
    console.log(`\n--- AST Node Log: ${label} (File: ${filePath}) ---`);
    let nodeCount = 0;
    visit(tree, (node: Node & Partial<Literal>) => {
      nodeCount++;
      console.log(`\n[Node #${nodeCount}] Type: ${node.type} text ${node.value}`);
      console.log(`  Node Data:`, cleanNode(node));
    });
    console.log(`\n--- Log End (${nodeCount} nodes visited) ---\n`);
  };
}

export default function remarkLogNodes(label: string = "AST Check") {
  return logNodes(label);
}
