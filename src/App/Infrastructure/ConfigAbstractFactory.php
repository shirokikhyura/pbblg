<?php

namespace App\Infrastructure;

use Interop\Container\ContainerInterface;
use Zend\ServiceManager\Factory\AbstractFactoryInterface;
use Zend\ServiceManager\Exception\ServiceNotCreatedException;
use T4webInfrastructure\Config;

/**
 * Create Service by template:
 *   ENTITY-NAME\Infrastructure\Config
 */
class ConfigAbstractFactory implements AbstractFactoryInterface
{
    public function canCreate(ContainerInterface $container, $requestedName)
    {
        return substr($requestedName, -strlen('Infrastructure\Config')) == 'Infrastructure\Config';
    }

    public function __invoke(ContainerInterface $container, $requestedName, array $options = null)
    {
        $namespace = strstr($requestedName, 'Infrastructure\Config', true);

        $namespaceParts = explode('\\', trim($namespace, "\\"));

        if (count($namespaceParts) > 1) {
            $entityName = $namespaceParts[1];
        } else {
            $entityName = $namespaceParts[0];
        }

        $config = $container->get('config');

        if (!isset($config['entity_map'])) {
            throw new ServiceNotCreatedException("You must define
                and configure $entityName in 'entity_map' config entry");
        }

        return new Config($config['entity_map']);
    }
}
