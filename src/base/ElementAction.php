<?php
/**
 * @link      https://craftcms.com/
 * @copyright Copyright (c) Pixel & Tonic, Inc.
 * @license   https://craftcms.com/license
 */

namespace craft\base;

use craft\elements\db\ElementQueryInterface;

/**
 * ElementAction is the base class for classes representing element actions in terms of objects.
 *
 * @author Pixel & Tonic, Inc. <support@pixelandtonic.com>
 * @since  3.0
 */
abstract class ElementAction extends SavableComponent implements ElementActionInterface
{
    // Static
    // =========================================================================

    /**
     * @inheritdoc
     */
    public static function isDestructive(): bool
    {
        return false;
    }

    // Properties
    // =========================================================================

    /**
     * @var
     */
    private $_message;

    // Public Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public function getTriggerLabel(): string
    {
        return static::displayName();
    }

    /**
     * @inheritdoc
     */
    public function getTriggerHtml()
    {
        return null;
    }

    /**
     * @inheritdoc
     */
    public function getConfirmationMessage()
    {
    }

    /**
     * @inheritdoc
     */
    public function performAction(ElementQueryInterface $criteria): bool
    {
        return true;
    }

    /**
     * @inheritdoc
     */
    public function getMessage()
    {
        return $this->_message;
    }

    // Protected Methods
    // =========================================================================

    /**
     * Sets the message that should be displayed to the user after the action is performed.
     *
     * @param string $message The message that should be displayed to the user after the action is performed.
     *
     * @return void
     */
    protected function setMessage(string $message)
    {
        $this->_message = $message;
    }
}
