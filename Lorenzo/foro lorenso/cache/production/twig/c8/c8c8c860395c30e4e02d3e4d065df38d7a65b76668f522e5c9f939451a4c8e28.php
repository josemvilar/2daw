<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* contact_admin.txt */
class __TwigTemplate_a1f7133a58103e2392b0f3e5987c622ceebd2012b9d32ed6a0905b46dfbe5477 extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 1
        echo "
Hola ";
        // line 2
        echo ($context["TO_USERNAME"] ?? null);
        echo ",

Lo siguiente es un correo electrónico enviado a ti a través de la página de contacto de Administración de \"";
        // line 4
        echo ($context["SITENAME"] ?? null);
        echo "\".

";
        // line 6
        if (($context["S_IS_REGISTERED"] ?? null)) {
            // line 7
            echo "El mensaje ha sido enviado desde una cuenta en el sitio.
Nombre de usuario: ";
            // line 8
            echo ($context["FROM_USERNAME"] ?? null);
            echo "
Dirección de correo electrónico: ";
            // line 9
            echo ($context["FROM_EMAIL_ADDRESS"] ?? null);
            echo "
Dirección IP: ";
            // line 10
            echo ($context["FROM_IP_ADDRESS"] ?? null);
            echo "
Perfil: ";
            // line 11
            echo ($context["U_FROM_PROFILE"] ?? null);
            echo "
";
        } else {
            // line 13
            echo "El mensaje fue enviado por un invitado que especifica la siguiente información de contacto:
Nombre: ";
            // line 14
            echo ($context["FROM_USERNAME"] ?? null);
            echo "
Dirección de correo electrónico: ";
            // line 15
            echo ($context["FROM_EMAIL_ADDRESS"] ?? null);
            echo "
Dirección IP: ";
            // line 16
            echo ($context["FROM_IP_ADDRESS"] ?? null);
            echo "
";
        }
        // line 18
        echo "

Este es el mensaje enviado
~~~~~~~~~~~~~~~~~~~~~~~~~~~

";
        // line 23
        echo ($context["MESSAGE"] ?? null);
        echo "
";
    }

    public function getTemplateName()
    {
        return "contact_admin.txt";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  95 => 23,  88 => 18,  83 => 16,  79 => 15,  75 => 14,  72 => 13,  67 => 11,  63 => 10,  59 => 9,  55 => 8,  52 => 7,  50 => 6,  45 => 4,  40 => 2,  37 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "contact_admin.txt", "");
    }
}
