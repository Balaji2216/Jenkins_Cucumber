 package com.adactin.runner;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import io.github.bonigarcia.wdm.WebDriverManager;


@RunWith(Cucumber.class)
@CucumberOptions(features = ".\\src\\test\\java\\com\\adactin\\feature\\Adactin.feature" ,
glue = "stepdefinition")

public class TestRunner {

	
	 public static WebDriver driver;

	@BeforeClass
	public static void browserLaunch() {
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		driver.manage().window().maximize();
	}

	@AfterClass
	public static void browserClose() {
		driver.close();
	}

}
