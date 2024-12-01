using AventStack.ExtentReports;
using AventStack.ExtentReports.Reporter;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using System.Diagnostics;

namespace TestProject1
{
    [TestFixture]
    public class Tests
    {

        public IWebDriver Driver;

        public string IamgePath { get; private set; }

        private ExtentReports _extent;
        private ExtentHtmlReporter _htmlReporter;
        private string AppUrl;

        private ExtentTest test;

        [OneTimeSetUp]
        public void Setup()
        {
            AppUrl = "http://127.0.0.1:5500/";

            // Inicializar ExtentReports
            _extent = new ExtentReports();

            // Configurar ExtentHtmlReporter
            string basePath = AppDomain.CurrentDomain.BaseDirectory;
            string solutionPath = Path.GetFullPath(Path.Combine(basePath, @"..\..\..\" + @"Reportes/Report.html"));
            _htmlReporter = new ExtentHtmlReporter(solutionPath);
            _htmlReporter.Config.Theme = AventStack.ExtentReports.Reporter.Configuration.Theme.Dark;
            _htmlReporter.Config.DocumentTitle = "Reporte de prueba";
            _htmlReporter.Config.ReportName = "Resultados de la prueba";

            // Adjuntar el reporter a ExtentReports
            _extent.AttachReporter(_htmlReporter);
        }

        [SetUp]
        public void BeforeTest()
        {
            Driver = new ChromeDriver("C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe");
            test = _extent.CreateTest(TestContext.CurrentContext.Test.Name);
        }

        [Test]
        public void TestFormDatosPersonalesSuccess()
        {
            test.Log(Status.Info, "Inicio el test de el Form Datos Personales.");
            Driver.Navigate().GoToUrl(AppUrl+ "/index.html");
            //Driver.Manage().Window.Size = new System.Drawing.Size(1652, 880);
            Driver.Manage().Window.FullScreen();
            Driver.FindElement(By.Id("name")).Click();
            Driver.FindElement(By.Id("name")).SendKeys("Yohan Humberto Rijo");
            Driver.FindElement(By.Id("country")).SendKeys("República Dominicana");
            Driver.FindElement(By.Id("City")).SendKeys("Yohan Humberto Rijo Astacio");
            Driver.FindElement(By.Id("street")).SendKeys("El almirante");
            Driver.FindElement(By.Id("sector")).Click();
            Driver.FindElement(By.Id("sector")).SendKeys("el almirante");
            Driver.FindElement(By.Id("carrier")).Click();
            {
                var dropdown = Driver.FindElement(By.Id("carrier"));
                dropdown.FindElement(By.XPath("//option[. = 'Software']")).Click();
            }
            Driver.FindElement(By.Id("btn-register")).Click();

            ShopPrintScreen();
            test.Log(Status.Pass, "Se completó el test de el Form Datos Personales");
            Driver.Close();
        }

        [Test]
        public void TestSeleccionDeMateriaSuccess()
        {
            test.Log(Status.Info, "Inicio el test de Seleccion De Materia.");

            Driver.Navigate().GoToUrl("http://127.0.0.1:5500//index.html");
            Driver.Manage().Window.FullScreen();
            Driver.FindElement(By.Id("name")).Click();
            Driver.FindElement(By.Id("name")).SendKeys("Yohan Humberto Rijo");
            Driver.FindElement(By.Id("country")).SendKeys("República Dominicana");
            Driver.FindElement(By.Id("City")).SendKeys("Yohan Humberto Rijo Astacio");
            Driver.FindElement(By.Id("street")).SendKeys("El almirante");
            Driver.FindElement(By.Id("sector")).Click();
            Driver.FindElement(By.Id("sector")).SendKeys("el almirante");
            Driver.FindElement(By.Id("carrier")).Click();
            {
                var dropdown = Driver.FindElement(By.Id("carrier"));
                dropdown.FindElement(By.XPath("//option[. = 'Software']")).Click();
            }
            Driver.FindElement(By.Id("btn-register")).Click();
            Driver.FindElement(By.CssSelector("#headingOne > .accordion-button")).Click();
            Thread.Sleep(100);
            Driver.FindElement(By.CssSelector("#ProgWeb > .form-check:nth-child(2) > .form-check-label")).Click();
            Driver.FindElement(By.CssSelector("#headingTwo > .accordion-button")).Click();
            Thread.Sleep(100);
            Driver.FindElement(By.CssSelector("#FisGeneral > .form-check:nth-child(3) > .form-check-label")).Click();
            Driver.FindElement(By.Id("btn-aceptar")).Click();
            Driver.FindElement(By.Id("btn-confirm")).Click();
            Thread.Sleep(1000);
            Driver.FindElement(By.CssSelector(".btn-primary")).Click();

            ShopPrintScreen();
            test.Log(Status.Pass, "Se completó el test de Seleccion De Materia.");

            Driver.Close();
        }

        [Test]
        public void TestConfirmacionSuccess()
        {
            test.Log(Status.Info, "Inicio el test de Confirmacion.");

            Driver.Navigate().GoToUrl(AppUrl + "/index.html");
            Driver.Manage().Window.FullScreen();
            Driver.FindElement(By.Id("name")).Click();
            Driver.FindElement(By.Id("name")).SendKeys("Yohan Humberto Rijo");
            Driver.FindElement(By.Id("country")).SendKeys("República Dominicana");
            Driver.FindElement(By.Id("City")).SendKeys("Yohan Humberto Rijo Astacio");
            Driver.FindElement(By.Id("street")).SendKeys("El almirante");
            Driver.FindElement(By.Id("sector")).Click();
            Driver.FindElement(By.Id("sector")).SendKeys("el almirante");
            Driver.FindElement(By.Id("carrier")).Click();
            {
                var dropdown = Driver.FindElement(By.Id("carrier"));
                dropdown.FindElement(By.XPath("//option[. = 'Software']")).Click();
            }
            Driver.FindElement(By.Id("btn-register")).Click();
            Driver.FindElement(By.CssSelector("#headingOne > .accordion-button")).Click();
            Thread.Sleep(50);
            Driver.FindElement(By.CssSelector("#ProgWeb > .form-check:nth-child(2) > .form-check-label")).Click();
            Driver.FindElement(By.CssSelector("#headingTwo > .accordion-button")).Click();
            Thread.Sleep(50);
            Driver.FindElement(By.CssSelector("#FisGeneral > .form-check:nth-child(3) > .form-check-label")).Click();
            Driver.FindElement(By.Id("btn-aceptar")).Click();
            Driver.FindElement(By.Id("btn-confirm")).Click();
            Thread.Sleep(50);
            Driver.FindElement(By.CssSelector(".btn-primary")).Click();

            ShopPrintScreen();
            test.Log(Status.Pass, "Se completó el test de Confirmacion.");

            Driver.Close();
        }

   
        [TearDown]
        public void AfterTest()
        {
            _extent.Flush();
        }

        [OneTimeTearDown]
        public void AfterTests()
        {
            _extent.Flush();
        }

        private void ShopPrintScreen()
        {
            // Tomar una captura de pantalla y adjuntarla al reporte
            var screenshot = ((ITakesScreenshot)Driver).GetScreenshot();

            string basePath = AppDomain.CurrentDomain.BaseDirectory;
            string imgPath = Path.GetFullPath(Path.Combine(basePath, @"..\..\..\" + @"Reportes/" + test.Model.Name + ".png"));
            screenshot.SaveAsFile(imgPath, ScreenshotImageFormat.Png);
            test.AddScreenCaptureFromPath(imgPath);
        }

    }
}