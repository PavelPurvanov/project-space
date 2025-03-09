/**
 * External dependencies.
 */
import { Grip, Pencil } from 'lucide-react';

/**
 * Internal dependencies.
 */
import Text from '@/components/text/text';
import Layout from '@/components/layout/layout';
import { HStack } from '@/components/stack/stack';

const ProjectsShow = ({ groups }) => {
    return (
        <Layout>
            <div className="groups">
                {groups.map((group) => (
                    <div key={group.id} className="group">
                        <div
                            style={{
                                backgroundColor: group.color,
                            }}
                            className="group__header"
                        >
                            <HStack align="center" justify="space-between">
                                <Text size={16} variant="white">
                                    {group.name}
                                </Text>

                                <HStack gap={8} align="center">
                                    <Pencil size={16} cursor="pointer" />

                                    <Grip size={16} cursor="grab" />
                                </HStack>
                            </HStack>
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    );
};

export default ProjectsShow;
