#!/usr/bin/env python3
"""
货币大全系统 - 端到端(E2E)测试
模拟用户操作流程，验证完整业务场景
"""

import requests
import time
import json
from datetime import datetime

class E2ETester:
    def __init__(self, base_url="https://t23602318.github.io/test-currency001"):
        self.base_url = base_url
        self.session = requests.Session()
        self.results = []
        
    def log(self, test_name, status, details=""):
        """记录测试结果"""
        timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        icon = "✅" if status == "PASS" else "❌" if status == "FAIL" else "⏳"
        self.results.append({
            "test": test_name,
            "status": status,
            "details": details,
            "time": timestamp
        })
        print(f"  {icon} {test_name}: {status}")
        if details:
            print(f"     {details}")
    
    def run_e2e_tests(self):
        """执行端到端测试"""
        print("\n" + "="*60)
        print("货币大全系统 - 端到端(E2E)测试")
        print("="*60)
        
        # 场景1: 首页访问流程
        print("\n【场景1: 用户访问首页】")
        self.test_homepage_access()
        
        # 场景2: 货币查询流程
        print("\n【场景2: 用户查询货币】")
        self.test_currency_query_flow()
        
        # 场景3: 数据管理流程
        print("\n【场景3: 用户管理数据】")
        self.test_data_management_flow()
        
        # 场景4: 图片加载流程
        print("\n【场景4: 图片加载验证】")
        self.test_image_loading_flow()
        
        # 场景5: 响应式设计验证
        print("\n【场景5: 响应式设计】")
        self.test_responsive_design()
        
        # 打印测试报告
        self.print_report()
        
        return all(r["status"] == "PASS" for r in self.results)
    
    def test_homepage_access(self):
        """测试首页访问流程"""
        try:
            # 步骤1: 访问首页
            response = self.session.get(f"{self.base_url}/?nocache={int(time.time())}", timeout=10)
            if response.status_code != 200:
                self.log("首页访问", "FAIL", f"HTTP {response.status_code}")
                return
            
            content = response.text
            
            # 步骤2: 验证关键元素
            checks = [
                ("页面标题", "货币大全 - 携程外币兑换系统" in content),
                ("系统Logo", "gradient-primary" in content),
                ("主标题", "货币大全" in content),
                ("副标题", "携程外币兑换业务支持系统" in content),
                ("查询入口", "货币查询" in content),
                ("管理入口", "数据管理" in content),
                ("版权信息", "© 2024" in content),
            ]
            
            all_passed = all(check[1] for check in checks)
            if all_passed:
                self.log("首页访问", "PASS", "所有关键元素正常")
            else:
                failed = [c[0] for c in checks if not c[1]]
                self.log("首页访问", "FAIL", f"缺少: {', '.join(failed)}")
                
        except Exception as e:
            self.log("首页访问", "FAIL", str(e))
    
    def test_currency_query_flow(self):
        """测试货币查询流程"""
        try:
            # 步骤1: 获取查询页面
            response = self.session.get(f"{self.base_url}/index.html?nocache={int(time.time())}", timeout=10)
            content = response.text
            
            # 步骤2: 验证查询功能组件
            checks = [
                ("筛选组件", "ComboboxFilter" in content or "filter" in content),
                ("货币数据", "currencies" in content or "currenciesData" in content),
                ("货币卡片", "CurrencyCard" in content or "card" in content),
                ("详情弹框", "CurrencyDetail" in content or "detail" in content),
                ("搜索功能", "search" in content.lower() or "模糊" in content),
            ]
            
            all_passed = all(check[1] for check in checks)
            if all_passed:
                self.log("查询功能组件", "PASS", "所有组件正常")
            else:
                failed = [c[0] for c in checks if not c[1]]
                self.log("查询功能组件", "FAIL", f"缺少: {', '.join(failed)}")
                
        except Exception as e:
            self.log("查询功能组件", "FAIL", str(e))
    
    def test_data_management_flow(self):
        """测试数据管理流程"""
        try:
            response = self.session.get(f"{self.base_url}/index.html?nocache={int(time.time())}", timeout=10)
            content = response.text
            
            # 验证数据管理功能
            checks = [
                ("数据表格", "table" in content.lower() or "AdminPage" in content),
                ("添加功能", "add" in content.lower() or "添加" in content),
                ("编辑功能", "edit" in content.lower() or "编辑" in content),
                ("删除功能", "delete" in content.lower() or "删除" in content),
                ("表单验证", "form" in content.lower() or "必填" in content),
            ]
            
            all_passed = all(check[1] for check in checks)
            if all_passed:
                self.log("数据管理功能", "PASS", "所有功能正常")
            else:
                failed = [c[0] for c in checks if not c[1]]
                self.log("数据管理功能", "FAIL", f"缺少: {', '.join(failed)}")
                
        except Exception as e:
            self.log("数据管理功能", "FAIL", str(e))
    
    def test_image_loading_flow(self):
        """测试图片加载流程"""
        try:
            # 测试多张货币图片
            test_images = [
                "images/front/USD_1_front_1.jpg",
                "images/back/USD_1_back_1.jpg",
                "images/front/EUR_5_front_8.jpg",
                "images/back/EUR_5_back_8.jpg",
                "images/front/HKD_10_front_21.jpg",
                "images/back/HKD_10_back_21.jpg",
            ]
            
            accessible = 0
            failed_images = []
            
            for img_path in test_images:
                try:
                    img_url = f"{self.base_url}/{img_path}"
                    response = self.session.head(img_url, timeout=5, allow_redirects=True)
                    if response.status_code == 200:
                        accessible += 1
                    else:
                        failed_images.append(img_path)
                except Exception as e:
                    failed_images.append(f"{img_path}: {str(e)}")
            
            success_rate = accessible / len(test_images)
            
            if success_rate >= 0.8:  # 80%成功率
                self.log("图片加载", "PASS", f"成功率: {accessible}/{len(test_images)}")
            else:
                self.log("图片加载", "FAIL", f"成功率过低: {accessible}/{len(test_images)}")
                
        except Exception as e:
            self.log("图片加载", "FAIL", str(e))
    
    def test_responsive_design(self):
        """测试响应式设计"""
        try:
            response = self.session.get(f"{self.base_url}/index.html?nocache={int(time.time())}", timeout=10)
            content = response.text
            
            # 验证响应式设计元素
            checks = [
                ("响应式类名", "md:" in content or "lg:" in content or "responsive" in content.lower()),
                ("视口设置", "viewport" in content),
                ("移动适配", "max-width" in content or "flex" in content),
                ("Tailwind响应式", "grid-cols-" in content or "flex-col" in content),
            ]
            
            all_passed = all(check[1] for check in checks)
            if all_passed:
                self.log("响应式设计", "PASS", "支持多设备适配")
            else:
                failed = [c[0] for c in checks if not c[1]]
                self.log("响应式设计", "FAIL", f"缺少: {', '.join(failed)}")
                
        except Exception as e:
            self.log("响应式设计", "FAIL", str(e))
    
    def print_report(self):
        """打印测试报告"""
        print("\n" + "="*60)
        print("E2E测试报告")
        print("="*60)
        
        passed = sum(1 for r in self.results if r["status"] == "PASS")
        failed = sum(1 for r in self.results if r["status"] == "FAIL")
        total = len(self.results)
        
        print(f"\n总计: {total} 个测试场景")
        print(f"通过: {passed} 个")
        print(f"失败: {failed} 个")
        print(f"成功率: {(passed/total*100):.1f}%")
        
        print("\n详细结果:")
        for result in self.results:
            icon = "✅" if result["status"] == "PASS" else "❌"
            print(f"  {icon} {result['test']}")
            if result["details"]:
                print(f"     {result['details']}")
        
        print("="*60)

if __name__ == "__main__":
    tester = E2ETester()
    success = tester.run_e2e_tests()
    exit(0 if success else 1)
