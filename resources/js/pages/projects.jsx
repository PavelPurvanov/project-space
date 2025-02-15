/**
 * External dependencies.
 */
import { PencilRuler } from 'lucide-react';

/**
 * Internal dependencies.
 */
import Layout from '@/components/layout/layout';
import { HStack } from '@/components/stack/stack';

const Projects = () => {
    return (
        <Layout>
            <div className="projects">
                <div className="projects__item">
                    <HStack>
                        <a>Project Title</a>
                    </HStack>
                    <HStack>
                        <button type="button">
                            <PencilRuler color="#0c3d51" />
                        </button>
                    </HStack>
                </div>
                <div className="projects__item">
                    <HStack>
                        <a>Project Title</a>
                    </HStack>
                    <HStack>
                        <button type="button">
                            <PencilRuler color="#0c3d51" />
                        </button>
                    </HStack>
                </div>
                <div className="projects__item">
                    <HStack>
                        <a>Project Title</a>
                    </HStack>
                    <HStack>
                        <button type="button">
                            <PencilRuler color="#0c3d51" />
                        </button>
                    </HStack>
                </div>
            </div>
        </Layout>
    );
};

export default Projects;
