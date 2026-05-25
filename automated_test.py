#!/usr/bin/env python3
"""
货币大全系统 - 自动化测试脚本
执行全面的功能测试、UI测试、兼容性测试
"""

import requests
import time
import json
import sys
from datetime import datetime
from typing import Dict, List, Tuple

class TestResult:
    def __init__(self):
        self.passed = 0
        self.failed = 0
        self.total = 0
        self.details = []
    
    def add_pass(self, test_id: str, description: str):
        self.passed += 1
        self.total += 1
        self.details.append({
            'id': test_id,
            'status': '✅ 通过',
            'description': description,
            'time': datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        })
    
    def add_fail(self, test_id: str, description: str, error: str):
        self.failed += 1
        self.total += 1
        self.details.append({
            'id': test_id,
            'status': '❌ 失败',
            'description': description,
            'error': error,
            'time': datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        })
    
    def print_summary(self):
        print("\n" + "="*60)
        print("测试执行完成")
        print("="*60)
        print(f"总计: {self.total} 个测试用例")
        print(f"通过: {self.passed} 个")
        print(f"失败: {self.failed} 个")
        print(f"通过率: {(self.passed/self.total*100):.1f}%")
        print("="*60)
        
        if self.failed > 0:
            print("\n失败的测试用例:")
            for detail in self.details:
                if detail['status'] == '❌ 失败':
                    print(f"  - {detail['id']}: {detail['description']}")
                    print(f"    错误: {detail.get('error', '未知错误')}")

class CurrencySystemTester:
    def __init__(self, base_url: str = "https://t23602318.github.io/test-currency001"):
        self.base_url = base_url
        self.result = TestResult()
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        })
    
    def run_all_tests(self):
        """执行所有测试"""
        print("开始执行自动化测试...")
        print(f"测试目标: {self.base_url}")
        print("="*60)
        
        # 一、首页模块测试
        print("\n【一、首页模块测试】")
        self.test_homepage_loading()
        self.test_homepage_elements()
        
        # 二、页面资源测试
        print("\n【二、页面资源测试】")
        self.test_static_resources()
        
        # 三、数据完整性测试
        print("\n【三、数据完整性测试】")
        self.test_data_integrity()
        
        # 四、性能测试
        print("\n【四、性能测试】")
        self.test_performance()
        
        # 五、图片资源测试
        print("\n【五、图片资源测试】")
        self.test_image_resources()
        
        # 打印测试报告
        self.result.print_summary()
        
        return self.result.failed == 0
    
    def test_homepage_loading(self):
        """TC-001: 页面加载测试"""
        test_id = "TC-001"
        try:
            print(f"  执行 {test_id}: 页面加载测试...")
            start_time = time.time()
            response = self.session.get(f"{self.base_url}/?nocache={int(time.time())}", timeout=10)
            load_time = time.time() - start_time
            
            if response.status_code != 200:
                self.result.add_fail(test_id, "页面加载测试", f"HTTP状态码: {response.status_code}")
                return
            
            content = response.text
            
            # 检查关键元素
            checks = [
                ("货币大全 - 携程外币兑换系统" in content, "页面标题"),
                ("货币大全" in content, "主标题"),
                ("携程外币兑换业务支持系统" in content, "副标题"),
                ("货币查询" in content, "货币查询按钮"),
                ("数据管理" in content, "数据管理按钮"),
                ("© 2024" in content, "版权信息"),
            ]
            
            failed_checks = [check[1] for check in checks if not check[0]]
            
            if failed_checks:
                self.result.add_fail(test_id, "页面加载测试", f"缺少元素: {', '.join(failed_checks)}")
            else:
                self.result.add_pass(test_id, f"页面加载测试 (加载时间: {load_time:.2f}s)")
                
        except Exception as e:
            self.result.add_fail(test_id, "页面加载测试", str(e))
    
    def test_homepage_elements(self):
        """TC-002/003: 首页元素测试"""
        test_id = "TC-002/003"
        try:
            print(f"  执行 {test_id}: 首页元素测试...")
            response = self.session.get(f"{self.base_url}/?nocache={int(time.time())}", timeout=10)
            content = response.text
            
            # 检查关键CSS类名和结构
            checks = [
                ("gradient-primary" in content, "渐变背景样式"),
                ("animate-slideUp" in content, "动画效果"),
                ("rounded-3xl" in content, "圆角样式"),
                ("shadow-lg" in content, "阴影效果"),
            ]
            
            failed_checks = [check[1] for check in checks if not check[0]]
            
            if failed_checks:
                self.result.add_fail(test_id, "首页元素测试", f"缺少样式: {', '.join(failed_checks)}")
            else:
                self.result.add_pass(test_id, "首页元素测试")
                
        except Exception as e:
            self.result.add_fail(test_id, "首页元素测试", str(e))
    
    def test_static_resources(self):
        """测试静态资源加载"""
        test_id = "TC-RES-001"
        try:
            print(f"  执行 {test_id}: 静态资源测试...")
            
            resources = [
                ("主页面", f"{self.base_url}/index.html"),
            ]
            
            all_passed = True
            for name, url in resources:
                try:
                    response = self.session.head(url, timeout=5, allow_redirects=True)
                    if response.status_code != 200:
                        all_passed = False
                        print(f"    ⚠️ {name}: HTTP {response.status_code}")
                except Exception as e:
                    all_passed = False
                    print(f"    ⚠️ {name}: {str(e)}")
            
            if all_passed:
                self.result.add_pass(test_id, "静态资源加载测试")
            else:
                self.result.add_fail(test_id, "静态资源加载测试", "部分资源加载失败")
                
        except Exception as e:
            self.result.add_fail(test_id, "静态资源加载测试", str(e))
    
    def test_data_integrity(self):
        """测试数据完整性"""
        test_id = "TC-DATA-001"
        try:
            print(f"  执行 {test_id}: 数据完整性测试...")
            
            response = self.session.get(f"{self.base_url}/index.html?nocache={int(time.time())}", timeout=10)
            content = response.text
            
            # 检查关键数据结构
            checks = [
                ("useState" in content, "React状态管理"),
                ("currenciesData" in content or "currencies" in content, "货币数据"),
                ("filter" in content, "筛选功能"),
                ("map" in content, "列表渲染"),
            ]
            
            failed_checks = [check[1] for check in checks if not check[0]]
            
            if failed_checks:
                self.result.add_fail(test_id, "数据完整性测试", f"缺少: {', '.join(failed_checks)}")
            else:
                self.result.add_pass(test_id, "数据完整性测试")
                
        except Exception as e:
            self.result.add_fail(test_id, "数据完整性测试", str(e))
    
    def test_performance(self):
        """TC-019: 性能测试"""
        test_id = "TC-019"
        try:
            print(f"  执行 {test_id}: 性能测试...")
            
            load_times = []
            for i in range(3):
                start_time = time.time()
                response = self.session.get(f"{self.base_url}/?nocache={int(time.time())}", timeout=10)
                load_time = time.time() - start_time
                load_times.append(load_time)
                time.sleep(0.5)
            
            avg_load_time = sum(load_times) / len(load_times)
            
            if avg_load_time < 3.0:
                self.result.add_pass(test_id, f"性能测试 (平均加载时间: {avg_load_time:.2f}s)")
            else:
                self.result.add_fail(test_id, "性能测试", f"加载时间过长: {avg_load_time:.2f}s (要求<3s)")
                
        except Exception as e:
            self.result.add_fail(test_id, "性能测试", str(e))
    
    def test_image_resources(self):
        """TC-021: 图片资源测试"""
        test_id = "TC-021"
        try:
            print(f"  执行 {test_id}: 图片资源测试...")
            
            # 测试几张关键图片
            test_images = [
                "images/front/USD_1_front_1.jpg",
                "images/back/USD_1_back_1.jpg",
            ]
            
            accessible_count = 0
            for img_path in test_images:
                try:
                    img_url = f"{self.base_url}/{img_path}"
                    response = self.session.head(img_url, timeout=5, allow_redirects=True)
                    if response.status_code == 200:
                        accessible_count += 1
                except:
                    pass
            
            if accessible_count > 0:
                self.result.add_pass(test_id, f"图片资源测试 (可访问: {accessible_count}/{len(test_images)})")
            else:
                self.result.add_fail(test_id, "图片资源测试", "图片资源无法访问")
                
        except Exception as e:
            self.result.add_fail(test_id, "图片资源测试", str(e))

def main():
    """主函数"""
    print("="*60)
    print("货币大全系统 - 自动化测试")
    print("="*60)
    print()
    
    # 创建测试实例
    tester = CurrencySystemTester()
    
    # 执行所有测试
    success = tester.run_all_tests()
    
    # 返回退出码
    sys.exit(0 if success else 1)

if __name__ == "__main__":
    main()
